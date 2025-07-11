/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const FeedbackScoreBatchItemThreadSource: core.serialization.Schema<
    serializers.FeedbackScoreBatchItemThreadSource.Raw,
    OpikApi.FeedbackScoreBatchItemThreadSource
> = core.serialization.enum_(["ui", "sdk", "online_scoring"]);

export declare namespace FeedbackScoreBatchItemThreadSource {
    export type Raw = "ui" | "sdk" | "online_scoring";
}
