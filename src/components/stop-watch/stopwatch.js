import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { formatTimeString } from "./utils";

class StopWatch extends Component {
  static propTypes = {
    start: PropTypes.bool,
    reset: PropTypes.bool,
    msecs: PropTypes.bool,
    options: PropTypes.object,
    laps: PropTypes.bool,
    getTime: PropTypes.func,
    startTime: PropTypes.number,
    getMsecs: PropTypes.func,
  };

  constructor(props) {
    super(props);
    const { startTime } = props;
    this.state = {
      startTime: null,
      stopTime: null,
      pausedTime: null,
      started: false,
      elapsed: startTime || 0,
      formatted: "00:00:00",
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.formatTime = this.formatTime.bind(this);
    const width = props.msecs ? 220 : 150;
    this.defaultStyles = {
      container: {
        backgroundColor: "#000",
        padding: 5,
        borderRadius: 5,
        width: width,
      },
      text: {
        fontSize: 30,
        color: "#FFF",
        marginLeft: 7,
      },
    };
  }

  componentDidMount() {
    if (this.props.start) {
      this.start();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.start !== this.props.start) {
      if (this.props.start) {
        this.start();
      } else {
        this.stop();
      }
    }
    if (prevProps.reset !== this.props.reset) {
      if (this.props.reset) {
        this.reset();
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  start() {
    if (this.props.laps && this.state.elapsed) {
      let lap = new Date() - this.state.stopTime;
      this.setState({
        stopTime: null,
        pausedTime: this.state.pausedTime + lap,
      });
    }

    this.setState({
      startTime: new Date(),
      started: true,
    });

    this.interval = this.interval
      ? this.interval
      : setInterval(() => {
          this.setState({ elapsed: new Date() - this.state.startTime });
          this.formatTime();
        }, 1000);
  }

  stop() {
    if (this.interval) {
      if (this.props.laps) {
        this.setState({ stopTime: new Date(), formatted: "00:00:00" });
      }

      clearInterval(this.interval);
      this.interval = null;
    }
    this.setState({ started: false });
  }

  reset() {
    const { startTime } = this.props;
    console.log(startTime, "star tymmm");
    this.setState({
      elapsed: startTime || 0,
      startTime: null,
      stopTime: null,
      pausedTime: null,
      formatted: "00:00:00",
    });
  }

  formatTime() {
    const { getTime, getMsecs, msecs } = this.props;
    const now = this.state.elapsed;
    this.setState({ formatted: formatTimeString(now, msecs) });
    if (typeof getTime === "function") {
      getTime(this.state.formatted);
    }
    if (typeof getMsecs === "function") {
      getMsecs(now);
    }
    return this.state.formatted;
  }

  render() {
    const styles = this.props.options ? this.props.options : this.defaultStyles;

    return (
      <View ref="stopwatch" style={styles.container}>
        <Text style={styles.text}>{this.state.formatted}</Text>
      </View>
    );
  }
}

export default StopWatch;
