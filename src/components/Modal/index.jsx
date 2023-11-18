import React, { useEffect } from "react";

const Modal = (props) => {
  const { isOpen, onClose, children } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const classes = {
    root: `z-30 max-h-screen modal overscroll-auto bg-slate-800 bg-opacity-50 flex justify-center items-center fixed w-full top-0 left-0 backdrop-blur-sm z-infinte`,
    children: `sm:w-[95%] bg-white p-6 rounded-md w-1/2 w-[31rem]`,
  };

  return (
    <>
      {props.isOpen && (
        <div
          onClick={(e) => {
            // Check if clicked on root className
            e.stopPropagation();
            if (e.target.className === classes.root) {
              onClose && onClose();
            }
          }}
          style={{ height: "calc(100vh)" }}
          className={classes.root}
        >
          <div className={classes.children}>
            <div className="h-full">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export { Modal };