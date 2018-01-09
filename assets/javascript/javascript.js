var GiphyTopics= ["Puppies","School","Snow","Music","Anime","vaporwave","terry crews","its always sunny", "simpsons", "birdemic"];
var Button;
var IsEmpty=true;
var APIKey = "CnAbpuLShr8j8ofdJmQRIRf53J2I0b47"



$(document).ready(function () {
    for(var i=0; i<GiphyTopics.length;i++) {
    Button=$("<button>");
    Button.addClass("Button"+i);
    Button.attr("ArraySlot", i );
    Button.addClass("Click")
    $(".ButtonHolder").append(Button);
    $(".Button"+i).append(GiphyTopics[i])
    }

$(".Click").on("click", function(){
var ArraySlot = ($(this).attr("ArraySlot"))

queryURL = "http://api.giphy.com/v1/gifs/search?q="+GiphyTopics[ArraySlot]+"&api_key="+APIKey+"&limit=10";
$.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {
        console.log(response.data)
        
        if (IsEmpty===false){
            $(".GiphyGoesHere").empty();    
            
            } else {
                IsEmpty=false;

            }
        for (var i=0; i<response.data.length; i++){
            
            GiphyDiv= $("<div>");
            GiphyDiv.addClass("Gif"+i);
            GiphyDiv.addClass("SizeAdjust");
            GiphyImage= $("<img>");
            GiphyImage.attr("src", response.data[i].images.downsized.url)
            GiphyImage.attr("width", 200)
            GiphyImage.attr("height", 200)
            
            $(".GiphyGoesHere").append(GiphyDiv);
            $(".Gif"+i).append("<p class=rating> Rating: "+response.data[i].rating+"</p>");
            $(".Gif"+i).append(GiphyImage);
            }
})

})
function ajax(){
    
}

$("#search").on("click", function() {
    
    i=GiphyTopics.length;
    var KeyWord = $("#keyword").val();
    GiphyTopics[i]=KeyWord;
    Button=$("<button>");
    console.log(GiphyTopics[i])

 var btn = document.createElement('button');
// var btn = $("<button>");

var wrapper = document.createElement('div');
//var wrapper = document.getElementById("Move");
wrapper.appendChild(btn);
//$(".ButtonHolder").append(btn);
btn.classList.add("Button"+i);
btn.classList.add("Click");
btn.setAttribute("ArraySlot", i );
$("#Move").append(wrapper);
var buttons = wrapper.getElementsByTagName("BUTTON");
$(".Button"+i).append(GiphyTopics[i])
// we still need to move the buttons up top
buttons[0].onclick = function(){ 
    var ArraySlot = ($(this).attr("ArraySlot"))
    queryURL = "http://api.giphy.com/v1/gifs/search?q="+GiphyTopics[ArraySlot]+"&api_key="+APIKey+"&limit=10";
    
    $.ajax({
    
    url: queryURL,
    method: "GET"
    }).done(function(response) {
        console.log(response);
        
        if (IsEmpty===false){
            $(".GiphyGoesHere").empty();    
            
            } else {
                IsEmpty=false;

            }
        for (var i=0; i<response.data.length; i++){
            GiphyDiv= $("<div>");
            GiphyDiv.addClass("Gif"+i);
            GiphyDiv.addClass("SizeAdjust");
            GiphyImage= $("<img>");
            GiphyImage.attr("src", response.data[i].images.downsized.url)
            GiphyImage.attr("width", 200)
            GiphyImage.attr("height", 200)
            GiphyImage.addClass("gif")
            $(".GiphyGoesHere").append(GiphyDiv);
            $(".Gif"+i).append("<p class=rating> Rating: "+response.data[i].rating+"</p>");
            $(".Gif"+i).append(GiphyImage);
            }
})  }

}); 
// https://codepen.io/calebgrove/pen/bIsqy
// https://stackoverflow.com/questions/44298501/how-to-pause-and-start-gif-using-jquery-ajax
// still is located in response.data.iamges.original_still
});

