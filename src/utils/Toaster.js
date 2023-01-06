import React, { useState } from "react";
import { Position, Toast, Toaster, Intent } from "@blueprintjs/core";

const ToasterNotify = ({ message, showType }) => {
  console.log("calling:", showType);
  let value = Intent + "." + `${showType}`;
  console.log("value ", JSON.stringify(value));
  const [valid, setValid] = useState(true);
  return (
    <div>
      {valid && (
        <Toaster position={Position.TOP_RIGHT}>
          <Toast
            timeout={2000}
            icon="success"
            message={message}
            // intent={Intent + `.${showType}`}
            intent={Intent + `.${showType}`}
            onDismiss={() => setValid(false)}
          />
        </Toaster>
      )}
    </div>
  );
};

export default ToasterNotify;
