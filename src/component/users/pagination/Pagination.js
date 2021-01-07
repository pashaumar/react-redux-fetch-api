import React, { useState } from "react";
import styles from "./Pagination.module.css";
function Pagination({ currentPage, setCurrentPage }) {
  const FIRST_PAGE = 1;
  const LAST_PAGE = 50;
  const PAGE_SIZE = 10;
  const [buttons, setButtons] = useState(
    Array(PAGE_SIZE)
      .fill(1)
      .map((item, index) => item + index)
  );
  const handleButtonClick = (item) => {
    // console.log(item)
    setCurrentPage(item);
    const firstPage = buttons[0];
    const lastPage = buttons[buttons.length - 1];
    console.log(lastPage);
    if (item <= FIRST_PAGE) {
      return;
    }
    if (item >= LAST_PAGE) {
      return;
    }
    if (
      lastPage === LAST_PAGE - PAGE_SIZE / 2 + 1 &&
      item >= LAST_PAGE - PAGE_SIZE + 1
    ) {
      setButtons(
        Array(PAGE_SIZE)
          .fill(41)
          .map((item, index) => item + index)
      );
      return;
    }
    if (firstPage === PAGE_SIZE / 2 && item <= PAGE_SIZE) {
      setButtons(
        Array(PAGE_SIZE)
          .fill(1)
          .map((item, index) => item + index)
      );
      return;
    }
    if (item === firstPage) {
      setButtons(
        Array(PAGE_SIZE)
          .fill(firstPage - PAGE_SIZE + 1)
          .map((item, index) => item + index)
      );
    }
    if (item === lastPage) {
      setButtons(
        Array(PAGE_SIZE)
          .fill(lastPage)
          .map((item, index) => item + index)
      );
    }
  };
  const handlePrevButton = () => {
    const firstPage = buttons[0];
    if (currentPage === FIRST_PAGE) {
      return;
    }
    setCurrentPage((prevState) => prevState - 1);
    if (currentPage - 1 <= PAGE_SIZE) {
      setButtons(
        Array(PAGE_SIZE)
          .fill(1)
          .map((item, index) => item + index)
      );
      return;
    }
    if (currentPage - 1 === firstPage) {
      setButtons(
        Array(PAGE_SIZE)
          .fill(firstPage - PAGE_SIZE + 1)
          .map((item, index) => item + index)
      );
    }
  };
  const handleNextButton = () => {
    const lastPage = buttons[buttons.length - 1];
    if (currentPage === LAST_PAGE) {
      return;
    }
    setCurrentPage((prevState) => prevState + 1);
    if (currentPage + 1 >= LAST_PAGE - PAGE_SIZE + 1) {
      setButtons(
        Array(PAGE_SIZE)
          .fill(41)
          .map((item, index) => {
            return item + index;
          })
      );
      return;
    }
    if (currentPage + 1 === lastPage) {
      setButtons(
        Array(PAGE_SIZE)
          .fill(lastPage)
          .map((item, index) => {
            return item + index;
          })
      );
    }
  };
  return (
    <>
      <div className={styles.buttonContainer}>
        <button
          className={
            currentPage === FIRST_PAGE ? styles.inactiveButton : styles.buttons
          }
          onClick={handlePrevButton}
        >
          PREV
        </button>
        {buttons.map((item, index) => (
          <button
            key={index + 1}
            onClick={() => handleButtonClick(item)}
            className={
              item === currentPage ? styles.currentPageButton : styles.buttons
            }
          >
            {item}
          </button>
        ))}
        <button
          className={
            currentPage === LAST_PAGE ? styles.inactiveButton : styles.buttons
          }
          onClick={handleNextButton}
        >
          NEXT
        </button>
      </div>
      <p>
        Page {currentPage} of {LAST_PAGE}
      </p>
    </>
  );
}

export default Pagination;
