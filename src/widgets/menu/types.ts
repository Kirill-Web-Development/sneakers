import {FC, ComponentType, HTMLAttributes} from "react";
import { Link } from "./link";

export interface Props {
    colored?: true
}

type childrenComponents = {
    Link: typeof Link
}

export type MenuType = FC<Props> & childrenComponents