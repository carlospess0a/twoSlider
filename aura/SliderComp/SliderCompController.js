({
	setValoresSlider : function (component, event, helper){
     var slider1 = parseInt(document.getElementById("slider-id-01").value);
     var slider2 = parseInt(document.getElementById("slider-id-02").value);
     if( slider1 > slider2 ){ var tmp = slider2; slider2 = slider1; slider1 = tmp; }
     component.set("v.filtroValor", "R$ " + slider1 + " R$ " + slider2);
    }
})