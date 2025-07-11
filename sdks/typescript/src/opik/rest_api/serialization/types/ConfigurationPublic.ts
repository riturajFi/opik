/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { ConfigurationPublicTimeoutToMarkThreadAsInactive } from "./ConfigurationPublicTimeoutToMarkThreadAsInactive";

export const ConfigurationPublic: core.serialization.ObjectSchema<
    serializers.ConfigurationPublic.Raw,
    OpikApi.ConfigurationPublic
> = core.serialization.object({
    timeoutToMarkThreadAsInactive: core.serialization.property(
        "timeout_to_mark_thread_as_inactive",
        ConfigurationPublicTimeoutToMarkThreadAsInactive.optional(),
    ),
});

export declare namespace ConfigurationPublic {
    export interface Raw {
        timeout_to_mark_thread_as_inactive?: ConfigurationPublicTimeoutToMarkThreadAsInactive.Raw | null;
    }
}
