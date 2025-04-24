import React, { useEffect, useRef, useState } from "react";
import styles from "./InputField.module.css";
import { HiMiniBold } from "react-icons/hi2";
import { FiItalic } from "react-icons/fi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { PiLinkBold } from "react-icons/pi";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RiQuoteText } from "react-icons/ri";
import { IoCodeSlash } from "react-icons/io5";
import { PiCodeBlockBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { BsEmojiSmile } from "react-icons/bs";
import { GoMention } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import { AiOutlineAudio } from "react-icons/ai";
import { CgShortcut } from "react-icons/cg";
import { IoSend } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";

const upperIcons = [
  { icon: HiMiniBold },
  { icon: FiItalic },
  { icon: AiOutlineStrikethrough },
  { icon: PiLinkBold },
  { icon: MdOutlineFormatListNumbered },
  { icon: MdOutlineFormatListBulleted },
  { icon: RiQuoteText },
  { icon: IoCodeSlash },
  { icon: PiCodeBlockBold },
];

const lowerIcons = [
  { icon: FaPlus },
  { icon: RxLetterCaseCapitalize },
  { icon: BsEmojiSmile },
  { icon: GoMention },
  { icon: IoVideocamOutline },
  { icon: AiOutlineAudio },
  { icon: CgShortcut },
];

const renderIcons = (icons, positions, iconClass, customClass) => {
  return icons.map(({ icon: IconComponent }, index) => (
    <React.Fragment key={index}>
      <IconComponent className={`${iconClass} ${customClass}`} />
      {positions.includes(index + 1) && <div className={styles.box11}></div>}
    </React.Fragment>
  ));
};

const InputField = ({ isThread, channelName='front end' }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheckbox = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (!message.trim()) return;
    console.log("Message Sent:", message);
    setMessage("");
    const textarea = textareaRef.current;
    textarea.style.height = "40px";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handlInputHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  return (
    <div className={styles.messageInputContainer}>
      <div className={styles.input_field}>
        <div className={styles.upper_row_icons}>
          {renderIcons(
            upperIcons,
            [3, 6],
            styles.upper_icons,
            styles.upper_icon_style
          )}
        </div>
        <textarea
          name="messageBox"
          ref={textareaRef}
          className={styles.textarea}
          placeholder="write your message ..."
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onInput={handlInputHeight}
        />

        {isThread && (
            <label className={styles.checkBox}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleToggleCheckbox}
                className={styles.checkBox_input}
              />
              <span className={styles.checkBox_text}>Also send to</span>
              {channelName && (
                <span className={styles.checkBox_channelName}>
                  {channelName}
                </span>
              )}
            </label>
        )}

        <div className={styles.lower_row_icons}>
          <div className={styles.left_icons}>
            {renderIcons(
              lowerIcons,
              [4, 6],
              styles.lower_icons,
              styles.lower_icon_style
            )}
          </div>
          <div
            className={`${styles.right_icons} ${
              message.trim() && styles.activeSend
            }`}
          >
            <div
              className={`${styles.sendBtns} ${styles.sendBtns_send}`}
              onClick={handleSend}
            >
              <IoSend />
            </div>
            <div className={styles.box11}></div>

            <div className={`${styles.sendBtns} ${styles.sendBtns_dropdown}`}>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.newLineHint} ${!message.trim() && styles.hidden}`}
      >
        <span
          className={`${styles.hintText} ${
            message.trim() ? styles.showHint : styles.hideHint
          }`}
        >
          Shift + Enter for new line
        </span>
      </div>
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  channelName: PropTypes.string,
  isThread: PropTypes.bool,
};
