/// <reference path="../utils/Singleton.ts" />
/// <reference path="../references/jquery.d.ts" />
/// <reference path="../references/jquery.initialize.d.ts" />

/** 
 * Opening page on a new tab button
 */
module RedditBoostPlugin {
    class NewTabSwitchPlugin extends utils.Singleton {
	    private _newTabButton: string = "<div id='disableNewTab' class='disableNewTab'>Disable New Tab</div>";
        
        get init() { return this._init; }
        
        private _init(): void {
            this.setSingleton();
            $(document).ready(function(){
              $("a.title").attr('target', '_blank');
            });
        }   
        
        /*private _disableCssButtonHandler(event) {
            $(event.currentTarget).text("Enable CSS");
            $(event.currentTarget).removeClass('disableCss').addClass('enableCss');
            $('link[title="applied_subreddit_stylesheet"]').prop('disabled', true);
            
            var subredditName = $(".redditname").text();
            this._bannedCss.push(subredditName);
            var bannedList = {}; 
            bannedList["RedditBoost_BlockedCss"] = this._bannedCss;
            window.dispatchEvent(new CustomEvent("RedditBoost_StoreCssBans", { "detail": bannedList }));
        }
        
        private _enableCssButtonHandler(event) {
            $(event.currentTarget).text("Disable CSS");
            $(event.currentTarget).removeClass('enableCss').addClass('disableCss');
            $('link[title="applied_subreddit_stylesheet"]').prop('disabled', false)
            
            var subredditName = $(".redditname").text();
            var blockedIndex = this._bannedCss.indexOf(subredditName);
            if (blockedIndex >= 0) {
                this._bannedCss.splice(blockedIndex, 1);
                var bannedList = {}; 
                bannedList["RedditBoost_BlockedCss"] = this._bannedCss;
                window.dispatchEvent(new CustomEvent("RedditBoost_StoreCssBans", { "detail": bannedList }));
            }
        }*/
    }
    export var NewTabSwitch: NewTabSwitchPlugin = new NewTabSwitchPlugin();
}