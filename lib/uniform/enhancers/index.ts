import {
  enhance,
  EnhancerBuilder,
  RootComponentInstance,
} from "@uniformdev/canvas";
import { GetStaticPropsContext } from "next";

// TODO: to enable contentful enhancers:
import { CANVAS_CONTENTFUL_PARAMETER_TYPES } from "@uniformdev/canvas-contentful";

import getContentfulEnhancer from "./contentful";

export default async function runEnhancers(
  composition: any,
  context: GetStaticPropsContext
) {
  const { preview } = context || {};
  await enhance({
    composition,
    enhancers: new EnhancerBuilder().parameterType(
      CANVAS_CONTENTFUL_PARAMETER_TYPES,
      getContentfulEnhancer(preview!)
    ),
    context,
  });
  return composition;
}
