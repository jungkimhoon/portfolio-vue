import Vue from "vue";

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import { faLink, faRedo, faUndo } from "@fortawesome/free-solid-svg-icons";
import { faGithub} from "@fortawesome/free-brands-svg-icons"
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt);
library.add(faLink, faRedo, faUndo);
library.add(faGithub)

Vue.component("font-awesome-icon", FontAwesomeIcon);
