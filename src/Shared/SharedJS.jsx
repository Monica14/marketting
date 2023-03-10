import React, { useEffect } from "react";
import loadjs from "loadjs";

const SharedJS = () => {
  useEffect(() => {
    console.log("Hi");
    loadjs(
      "http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",
      () => {
        loadjs(
          ["../../public/js/jquery-3.3.1.min.js","../../public/js/bootstrap.min.js", "../../public/js/jquery.nice-select.min.js"],
          () => {
            console.log("loaded ===");
            loadjs(
              ["../../public/js/jquery-ui.min.js", "../../public/js/jquery.slicknav.js", "../../public/js/mixitup.min.js"],
              () => {
                console.log("inner loaded ===");
                loadjs(
                  ["../../public/js/owl.carousel.min.js","../../public/js/main.js"],
                  () => {
                    console.log("inner loaded11 ===");
                    
                  }
                )
              }
            );
          }
        );
      }
    );
  });

  return <></>;
};

export default SharedJS;
