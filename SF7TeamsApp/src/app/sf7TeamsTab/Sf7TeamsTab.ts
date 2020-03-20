import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/sf7TeamsTab/index.html")
@PreventIframe("/sf7TeamsTab/config.html")
@PreventIframe("/sf7TeamsTab/remove.html")
export class Sf7TeamsTab {
}
