"use client";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "@/components/styles/sidebar.module.css";

const MyCalendar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger>
          <div className={styles.headingContent}>
            <span>
              {" "}
              {!isOpen ? (
                <MdKeyboardArrowRight size={28} />
              ) : (
                <MdOutlineKeyboardArrowDown size={28} />
              )}
            </span>
            My Calendars
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div>
            <Checkbox /> New
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default MyCalendar;
