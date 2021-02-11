import { Component } from "./Component.js";
import { MiniReact } from "./MiniReact.js";

// export function handleConfirmInput() {
//     console.log("test");
// }
export class Gify extends Component {
    propsTypes = {

    }


    render() {

        return MiniReact.createElement("div", {}, [
            MiniReact.createElement("input", {
                id: "inputGify",
                value: "",
                input: this.grab_data
            }, []),
            MiniReact.createElement("img", { style: "height:250px;width:250px;", id: "preview_gif" }, []),
            MiniReact.createElement("img", { style: "height:250px;width:250px;", id: "preview_gif2" }, []),
            MiniReact.createElement("img", { style: "height:250px;width:250px;", id: "preview_gif3" }, []),
            MiniReact.createElement("img", { style: "height:250px;width:250px;", id: "preview_gif4" }, []),
            MiniReact.createElement("img", { style: "height:250px;width:250px;", id: "preview_gif5" }, []),
            MiniReact.createElement("img", { style: "height:250px;width:250px;", id: "preview_gif6" }, []),
            MiniReact.createElement("img", { style: "height:250px;width:250px;", id: "preview_gif7" }, []),

        ]);
    }





    // function to call the trending and category endpoints
    grab_data() {
        // set the apikey and limit
        var apikey = "MXS5QMNRIY3Z";
        var lmt = 8;

        // test search term
        var search_term = document.getElementById("inputGify").value;

        // using default locale of en_US
        var search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
            apikey + "&limit=" + lmt;


        var xmlHttp = new XMLHttpRequest();

        // set the state change callback to capture when the response comes in
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                console.log("gif")
                var response_objects = JSON.parse(xmlHttp.responseText);
                console.log(response_objects);
                // top_10_gifs = response_objects["results"];

                // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (tinygif)

                document.getElementById("preview_gif").src = response_objects["results"][1]["media"][0]["nanogif"]["url"];
                document.getElementById("preview_gif2").src = response_objects["results"][2]["media"][0]["nanogif"]["url"];
                document.getElementById("preview_gif3").src = response_objects["results"][3]["media"][0]["nanogif"]["url"];
                document.getElementById("preview_gif4").src = response_objects["results"][4]["media"][0]["nanogif"]["url"];
                document.getElementById("preview_gif5").src = response_objects["results"][5]["media"][0]["nanogif"]["url"];
                document.getElementById("preview_gif6").src = response_objects["results"][6]["media"][0]["nanogif"]["url"];
                document.getElementById("preview_gif7").src = response_objects["results"][7]["media"][0]["nanogif"]["url"];


                // document.getElementById("share_gif").src = response_objects["results"][0]["media"][0]["tinygif"]["url"];
            }
        }

        // open as a GET call, pass in the url and set async = True
        xmlHttp.open("GET", search_url, true);

        // call send with no params as they were passed in on the url string
        xmlHttp.send(null);


        // this.httpGetAsync(search_url, this.tenorCallback_search);

        // data will be loaded by each call's callback
        return;
    }



}