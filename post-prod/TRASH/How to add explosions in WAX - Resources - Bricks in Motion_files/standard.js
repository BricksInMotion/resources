var scrollwindow;

function domready(){
	userajaxset();
	placeholdersset();
	$$('.loadbar .loadbar_complete').each(function(el,i){
		el.set('tween',{wait:false,duration:800});
	});
	scrollwindow = new Fx.Scroll(window,{'transition':Fx.Transitions.Sine.easeInOut});
	if(Browser.Engine.trident && !Browser.Engine.trident5){
		alert('Uhm... you have an old browser. We recommend you upgrade (things are gonna break otherwise).');
	}
}

function userajaxset(){
	$$('.userinputajax').each(function(el,i){
		el.set('load',{evalScripts: true, method: 'get', autoCancel:true});
		if(el.getProperty('title').clean() !== ""){
			addon = el.getProperty('title') + '&';
		} else {
			addon = '';
		}
		el.store('addon',addon);
		el.store('validname',false);
		el.addEvent('keyup',function(){
			if(el.value.clean() != ""){
				if(rel = $('userselectiondiv' + el.getProperty('id'))){
					rel.destroy();
				}
				el.get('load').cancel();
				el.load('/userajax.php?' + el.retrieve('addon') + 'updateid=' + encodeURIComponent(el.getProperty('id')) + '&inputvalue=' + encodeURIComponent(el.value.clean()) + '&ajax=true');
			} else {
				el.get('load').cancel();
				if(rel = $('userselectiondiv' + el.getProperty('id'))){
					rel.destroy();
				}
			}
		});
		el.addEvent('focus',function(){
			el.fireEvent('keyup');
		});
		el.addEvent('blur',function(){
			(function(){
				el.get('load').cancel();
				if(rel = $('userselectiondiv' + el.getProperty('id'))){
					rel.destroy();
				}
			}).delay(210);
		});
		el.removeProperty('title');
	});
}

function setajaxvalue(id,value){
	$(id).value = value;
	$(id).store('validname',true);
	if(rel = $('userselectiondiv' + id)){
		rel.destroy();
	}
}

function placeholdersset(){
	if (typeof window.loadFirebugConsole != "undefined") { 
		window.console.log('2');
	}
	$$('.placeholderinput').each(function(el,i){
		if($defined(el.getProperty('title')) && el.getProperty('title').clean() !== ""){
			el.store('placeholder',el.getProperty('title'));
			el.store('firstcolor',el.getStyle('color'));
			el.store('secondcolor',new Color(el.getStyle('color')).setBrightness(70).setSaturation(20));
			if(el.value.clean() == ""){
				el.store('holding','true');
				el.value = el.getProperty('title');
				el.setStyle('color',el.retrieve('secondcolor'));
			} else {
				el.store('holding','false');
			}
			
			el.addEvent('focus',function(){
				if(el.retrieve('holding') == 'true'){
					el.setStyle('color',el.retrieve('firstcolor'));
					el.store('holding','false');
					el.value = "";
				}
			});
			
			el.addEvent('blur',function(){
				if(el.value.clean() == ""){
					el.setStyle('color',el.retrieve('secondcolor'));
					el.store('holding','true');
					el.value = el.retrieve('placeholder');
				}
			});
			el.setProperty('title','');
		}
	});
}

function elshow(el,focusel){
	if(el1 = $(el)){
		el1.setStyle('visibility','visible');
		if(el2 = $(focusel)){
			el2.focus();
		}
	}
}

function elhide(el,focusel){
	if(el1 = $(el)){
		el1.setStyle('visibility','hidden');
		if(el2 = $(focusel)){
			el2.focus();
		}
	}
}

function changeoption(el){
	if(!el.hasClass('selectedview')){
		el.getElement('img').setProperty('src','/images/' + stringbetween(el.getElement('img').getProperty('src'),'films/','_desel.png') + '_sel.png');
		$$('.selectedview img')[0].setProperty('src','/images/' + stringbetween($$('.selectedview img')[0].getProperty('src'),'films/','_sel.png') + '_desel.png');
		$$('.selectedview')[0].removeClass('selectedview');
		el.addClass('selectedview');
	}
}

function stringbetween(string,start,end){
	index1 = string.indexOf(start);
	index2 = string.indexOf(end);
	if(index1 != false && index2 != false){
		result = string.substring(index1, index2);
		return result;
	} else {
		return false;
	}
}