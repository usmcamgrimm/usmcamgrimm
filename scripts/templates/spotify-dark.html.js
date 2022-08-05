<svg width="480" height="133" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <foreignObject width="480" height="133">
        <div xmlns="http://www.w3.org/1999/xhtml" class="container">
            <style>
                .main {
                    /*margin-top: 40px;*/
                    display: flex;
                }
                .currentStatus {
                    float: left;
                    font-size: 24px;
                    position: static;
                    margin-top: -5px;
                    margin-left: 10px;
                }
                
                .container {
                    border-radius: 5px;
                    padding: 10px 10px 10px 0px;
                    background-color: #{{background_color}};
                    border: 1px solid #{{border_color}};
                }
                .art {
                    width: 27%;
                    float: left;
                    margin-left: -5px;
                }
                .content {
                    width: 71%;
                }
                .song {
                    width: 330px;
                    color: #f7f7f7;
                    overflow: hidden;
                    margin-top: 3px;
                    font-size: 24px;
                    text-align: center;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .artist {
                    width: 330px;
                    color: #9f9f9f;
                    font-size: 20px;
                    margin-top: 4px;
                    text-align: center;
                    margin-bottom: 5px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .cover {
                    width: 100px;
                    height: 100px;
                    border-radius: 5px;
                }
                #bars {
                    width: 40px;
                    height: 30px;
                    bottom: 23px;
                    position: absolute;
                    margin: -20px 0 0 0px;
                }
                .bar {
                    width: 3px;
                    bottom: 1px;
                    height: 3px;
                    position: absolute;
                    background: #1DB954cc;
                    animation: sound 0ms -800ms linear infinite alternate;
                }
                
                .spotify-logo {
                    position: fixed;
                    right: 20px;
                    top: 10px;
                    width: 25px;
                    filter: invert(1);
                }
                a {
                    text-decoration: none;
                }
                div {
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
                }
                
                @keyframes sound {
                    0% {
                        height: 3px;
                        opacity: .35;
                    }
                    100% {
                        height: 15px;
                        opacity: 0.95;
                    }
                }
                {{barCSS|safe}}
            </style>

            <!-- <div class="currentStatus">{{status}}</div> -->

            <div class="main">
                <a class="art" href="{}" target="_blank">
                    <center>
                        <img src="data:image/png;base64, {{image}}" class="cover" />
                    </center>
                </a>

                <div class="content">
                    <a href="{{songURI}}" target="_blank">
                        <div class="song">{{songName}}</div>
                    </a>
                    <a href="{{artistURI}}" target="_blank">
                        <div class="artist">{{artistName}}</div>
                    </a>
                    <div id="bars">{{contentBar|safe}}</div> 
                    <!-- <a href="{{songURI}}" class="spotify-logo">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                    </a> -->
                </div>
            </div>

        </div>
    </foreignObject>
</svg>