import { EagerLoadImages, wrapCollectionLayout } from "@quintype/components";
import React from "react";
import { FourColGrid } from "./four-col-grid";

// This should not be needed anymore as we are using Gumlet
function wrapEager(f) {
  const wrappedComponent = function WrapEager(props) {
    if (props.index === 0) {
      return (
        <EagerLoadImages predicate={token => token === "above-fold"}>{React.createElement(f, props)}</EagerLoadImages>
      );
    } else {
      return React.createElement(f, props);
    }
  };

  if (f.storyLimit) {
    wrappedComponent.storyLimit = f.storyLimit;
  }

  return wrappedComponent;
}

export default {
  FourColGrid: wrapEager(wrapCollectionLayout(FourColGrid)),
  defaultTemplate: wrapEager(wrapCollectionLayout(FourColGrid))
};
