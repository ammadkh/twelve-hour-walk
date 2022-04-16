import React, { useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { ListItem } from "@rneui/themed";

import { DrawerHeader } from "./custom-content.styles";
import { ImgWrapper } from "./custom-content.styles";
import { CloseIcon } from "./custom-content.styles";
import { Accordion } from "./custom-content.styles";
import { AccordionListItems } from "./custom-content.styles";
import { AccordionListItemTitle } from "./custom-content.styles";
import { LogoutItem } from "./custom-content.styles";

const accordianTitle = (
  <>
    <ListItem.Content>
      <ListItem.Title style={{ color: "white", fontSize: 24 }}>
        Account
      </ListItem.Title>
    </ListItem.Content>
  </>
);

const accountListItems = [
  { name: "Change Email", bottomBorder: false },
  { name: "Change Password", bottomBorder: false },
  { name: "Change Walk Date", bottomBorder: true },
];

export const CustomDrawerContent = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerHeader>
        <ImgWrapper />
        <CloseIcon onPress={() => props.navigation.toggleDrawer()} />
      </DrawerHeader>
      <DrawerItemList {...props} />
      <Accordion
        bottomDivider={expanded ? false : true}
        content={accordianTitle}
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        {accountListItems.map((l, i) => (
          <AccordionListItems
            bottomDivider={l.bottomBorder}
            key={i}
            onPress={() => {}}
          >
            <ListItem.Content>
              <AccordionListItemTitle>{l.name}</AccordionListItemTitle>
            </ListItem.Content>
          </AccordionListItems>
        ))}
      </Accordion>

      <LogoutItem label="Logout" onPress={() => null} />
    </DrawerContentScrollView>
  );
};
