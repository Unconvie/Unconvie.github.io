window.addEventListener('load', init);
function init(){
	
	if(localStorage.getItem('theme')==='day-theme'){
		document.getElementById('day-theme').setAttribute('href', 'form-day.css');
	}
	else if(localStorage.getItem('theme')==='night-theme'){
		document.getElementById('day-theme').setAttribute('href', 'form-night.css');
	}



	//ассинхронные запросы
	
	const url = "form.json";
	document.getElementById("form-version-select").addEventListener("click", ()=>{
		let advice1 = document.getElementsByClassName("advice1")[0];
		let advice2 = document.getElementsByClassName("advice2")[0];
		let advice3 = document.getElementsByClassName("advice3")[0];
		let answer = document.getElementById("form-version-select").value;
    fetch(url)
        .then((response) => {
            return response.json();
        }).then((json) => {
					
					advice1.innerText = json[answer]["advice1"];
					advice2.innerText = json[answer]["advice2"];
					advice3.innerText = json[answer]["advice3"];
		
        });
	})




	// document.getElementById("form-version-select").addEventListener("click", ()=>{
	// 	let answer = document.getElementById("form-version-select").value;
	// 	if(answer == "1.0"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Venti would be a way to go here since klee isnt much of a diversive character. Four stars in this version are also worthy of pulling as they are ones of the greatest supports/subDPS's";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Childe is a good DPS and Zhongli is a good shielder, both worth pulling";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Overall since Venti is a support he would be used in bigger amount of teams than anyone else, but Childe is pretty diversive too, so pick out of them";
	// 	}
	// 	else if(answer == "1.1"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Both Zhongli and Childe are great, since its only the start of the game, DPS would be more valueable at the moment, so i would reccomend going for Childe";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Albedo is a geo support and ganyu is a pretty good cryo DPS. Four stars here is a must to have. Out of them i would reccoment going for Ganyu as she has great dmg scaling and generally would be more usefull";
	// 		document.getElementsByClassName("advice3")[0].innerText = "You will have to pick out of two DPS characters, Ganyu and Childe. Hydro reactions have more DMG, so i would reccoment going for Childe here";
	// 	}
	// 	else if(answer == "1.2"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Since Albedo is more of a specifically used support and will not be used by player in endgame, Ganyu (as a more diversive character) would be a better choice here as she remains useful even in endgame";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Xiao and Hutao are both very strong DPS and both need quite a time to build, go with the one you like the most. Four stars on Hutao's banner are great as well";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Overall i would reccomend going for Xiao, Ganyu or Hutao as they are strong DPS characters and going to remain this way for a long time";
	// 	}
	// 	else if(answer == "1.3"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Xiao and Hutao are both very strong DPS and both need quite a time to build, go with the one you like the most. Four stars on Hutao's banner are great as well";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Out of Childe and Venti pick anyone, they both will be very helpful for a long time";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Overall you will need to pick out of Hutao, Childe and Xiao as DPS, and then Venti as support. Everyone here is great, pick whoever you simp for more ;]";
	// 	}
	// 	else if(answer == "1.4"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Out of Childe and Venti pick anyone, they both will be very helpful for a long time";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Zhongli and Eula. Eula is not diversive and needs quite an investment, at the same time Zhongli (as a shielder) needs to be flooded with HP and will be used by player for years";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Venti and Zhongli are great supports and childe is a good DPS. If you dont lack doging skills - skip Zhongli and go either for Venti(good crowd controll and element spreading) or Childe (Hydro is a good element with a variety of reactions)";
	// 	}
	// 	else if(answer == "1.5"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Zhongli and Eula. Eula is not diversive and needs quite an investment, at the same time Zhongli (as a shielder) needs to be flooded with HP and will be used by player for years";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Klee and Kazuha. Kazuha is the best anemo support, he not only provides crowd controll but also buffs your team a tonn. He would be the best pull choice here";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Overall Kazuha is the most powerfulll and diversive character here";
	// 	}
	// 	else if(answer == "1.6"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Klee and Kazuha. Kazuha is the best anemo support, he not only provides crowd controll but also buffs your team a tonn. He would be the best pull choice here";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Ayaka and Yoimiya. Yoimiya can only be a DPS surrounded by supports, Ayaka here is a little more diversive. Better pull for Ayaka";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Overall Kazuha would be your first priority, then comes Ayaka and Yoimiya";
	// 	}
	// 	else if(answer == "2.0"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Ayaka and Yoimiya. Yoimiya can only be a DPS surrounded by supports, Ayaka here is a little more diversive. Better pull for Ayaka";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Raiden and Kokomi. Both are great characters. Kokomi can be used in alot of teams as a hydro applier and healer, Raiden is a very strong character, can be used as DPS, electro applier. If you are confident about your dodging skills or you already have a healer/shielder - go for raiden";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Overall Raiden would be a top one priority for you, followed by Kokomi, then Ayaka and Yoimiya";
	// 	}
	// 	else if(answer == "2.1"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Raiden and Kokomi. Both are great characters. Kokomi can be used in alot of teams as a hydro applier and healer, Raiden is a very strong character, can be used as DPS, electro applier. If you are confident about your dodging skills or you already have a healer/shielder - go for raiden";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Childe and Hutao. Both ae great DPS characters, though Hutao would be dealing more DMG and Childe will fit in more teams";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Overall Raiden would be the strongest character, but feel free to pull for whoever you want here. everyone is good";
	// 	}
	// 	else if(answer == "2.2"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Childe and Hutao. Both ae great DPS characters, though Hutao would be dealing more DMG and Childe will fit in more teams";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Albedo, Eula and Itto. Out of all three Itto would be first prioity, everyone else doesnt worth wasting resourses (if you are not specifically going for phisical team or just want to use Albedo)";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Overall look what team you want to build. Hutao for Pyro based team, Childe for Hydro and Itto for Geo. I would reccomend going for Childe";
	// 	}
	// 	else if(answer == "2.3"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Albedo, Eula and Itto. Out of all three Itto would be first prioity, everyone else doesnt worth wasting resourses (if you are not specifically going for phisical team or just want to use Albedo)";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Shenhe, Xiao, Zhongli, Ganyu. Shenhe is your last option, only pull for her out of love for some Cryo DPS you already have built. If you have a decent healer or you dodge well and dont want a Geo team - skip Zhongli as well. Now you choose between Xiao and Ganyu, Ganyu is a bit easier to build and use. But if you dont care bout difficulties - go for whoever you want out of those two";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Overall your best options are Xiao and Ganyu followed by Itto for mono Geo team";
	// 	}
	// 	else if(answer == "2.4"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Shenhe, Xiao, Zhongli, Ganyu. Shenhe is your last option, only pull for her out of love for some Cryo DPS you already have built. If you have a decent healer or you dodge well and dont want a Geo team - skip Zhongli as well. Now you choose between Xiao and Ganyu, Ganyu is a bit easier to build and use. But if you dont care bout difficulties - go for whoever you want out of those two";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Yae Miko, Raiden and Kokomi. Absolutely everyone is good but Yae needs a shield or good dodging skills";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Overall Raiden would be your first priority, if you dont want any electro character then go for Xiao, Kokomi or Zhongli";
	// 	}
	// 	else if(answer == "2.5"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Yae Miko, Raiden and Kokomi. Absolutely everyone is good but Yae needs a shield or good dodging skills";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Ayato, Ayaka and Venti. Everyone is pretty much on the same level here. Ayato being a good hydro DPS and a hydro applier";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Overall everyone is great. Make decision based on your desired team";
	// 	}
	// 	else if(answer == "2.6"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Ayato, Ayaka and Venti. Everyone is pretty much on the same level here. Ayato being a good hydro DPS and a hydro applier";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Yelan, Xiao and Itto. Yelan here is the strongest piece, followed by Xiao. Reccomended to go for Yelan";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Overall Yelan would be your best choice here, followed by Xiao and then everyone else";
	// 	}
	// 	else if(answer == "2.7"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Yelan, Xiao and Itto. Yelan here is the strongest piece, followed by Xiao. Reccomended to go for Yelan";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Kazuha, Klee and Yoimiya. Kazuha is a top one here for sure, then comes Yoimiya, Klee does not worth it";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Overall Kazuha and Yelan are the ones to go for";
	// 	}
	// 	else if(answer == "2.8"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Kazuha, Klee and Yoimiya. Kazuha is a top one here for sure, then comes Yoimiya, Klee does not worth it";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Tighnari, Zhongli, Ganyu and Kokomi. With new dendro element, new reactions come, making electro and hydro characters alot stronger. Tighnari's playstyle requires him on field, so to trigger reactions you need an off-filed electro/hydro applier to use Tighnari correctly";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Since we are getting out first dendro character here and he is quite decent, you could pull for him, especially if you have an off-field applier (hydro, electro), but do not forget about Kazuha as he elevates your accout to a whole new level";
	// 	}
	// 	else if(answer == "3.0"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Tighnari, Zhongli, Ganyu and Kokomi. With new dendro element, new reactions come, making electro and hydro characters alot stronger. Tighnari's playstyle requires him on field, so to trigger reactions you need an off-filed electro/hydro applier to use Tighnari correctly";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Cyno, Venti, Nilou, Albedo. Assuming you already have an anemo character (Sucrose, Venti, Kazuha), your option here would be Cyno or Nilou. I would reccomend pulling for Nilou as at the moment dendro reactions are very good and cheap in use";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Tighnari would be a very important part of many future updates, so getting Tighnari would be a decent choice, Nilou is a good choice as well as Kokomi (since they are hydro appliers with Nilou even being able to deal some decent hydro DMG)";
	// 	}
	// 	else if(answer == "3.1"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Cyno, Venti, Nilou, Albedo. Assuming you already have an anemo character (Sucrose, Venti, Kazuha), your option here would be Cyno or Nilou. I would reccomend pulling for Nilou as at the moment dendro reactions are very good and cheap in use";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Nahida, Yoimiya, Childe, Yae. Nahida is a great support and DPS, she will work very well with Raiden, Kokomi, Yae etc.";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Overall Nahida and Nilou are your best options here with Nahida, as i think, being your best options";
	// 	}
	// 	else if(answer == "3.2"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Nahida, Yoimiya, Childe, Yae. Nahida is a great support and DPS, she will work very well with Raiden, Kokomi, Yae etc.";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Scara, Itto, Raiden and Ayato. Scara is a strong DPS but hes a little bit hard to play without his C1 or a shielder. Dont forget how powerful Raiden is though)";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Nahida, Scara and Raiden here are great. Scara would be working as an anemo DPS accompanied by supports and subDPS (Xingqiu, Yelan, Zhongli)";
	// 	}
	// 	else if(answer == "3.3"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Scara, Itto, Raiden and Ayato. Scara is a strong DPS but hes a little bit hard to play without his C1 or a shielder. Dont forget how powerful Raiden is though)";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Al Haitham, Xiao, Hutao, Yelan. Haitham is the strongest dendro DPS and Yelan is one of the best hydro characters";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Haitham would be a good option to pull for as he is a great DPS and you should already have a few suitable hydro and electro characters for him, if you dont feel like pulling for him - Yelan is still a great choice";
	// 	}
	// 	else if(answer == "3.4"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Al Haitham, Xiao, Hutao, Yelan. Haitham is the strongest dendro DPS and Yelan is one of the best hydro characters";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Dehya, Cyno, Ayaka and Shenhe. Since Dehya does not really have good scales and she will be added to standard banner which makes her your least wanted option, you already know about Shenhe (cryo support only), so best oprions here are Ayaka and Cyno";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Haitham would be a good option to pull for as he is a great DPS and you should already have a few suitable hydro and electro characters for him, if you dont feel like pulling for him - Yelan is still a great choice";
	// 	}
	// 	else if(answer == "3.5"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Dehya, Cyno, Ayaka and Shenhe. Since Dehya does not really have good scales and she will be added to standard banner which makes her your least wanted option, you already know about Shenhe (cryo support only), so best oprions here are Ayaka and Cyno";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Nahida, Nilou, Baizhu, Ganyu. Nahida and Nilou here are the best characters, followed by Ganyu and then Baizhu (who i wouldnt reccomend to pull for)";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Nahida and Nilou are your first tier options here as they are most diversive here, followed by Ganyu, Ayaka and Cyno and then everyone else";
	// 	}
	// 	else if(answer == "3.6"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Nahida, Nilou, Baizhu, Ganyu. Nahida and Nilou here are the best characters, followed by Ganyu and then Baizhu (who i wouldnt reccomend to pull for)";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Yoimiya, Yae Miko, Kazuha and Haitham. Haitham and Kazuha here are the best, since current version is all about dendro reactions, Haitham would be a smarter choice";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Everyone except Yae and Baizhu would be a good choice here";
	// 	}
	// 	else if(answer == "3.7"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Yoimiya, Yae Miko, Kazuha and Haitham. Haitham and Kazuha here are the best, since current version is all about dendro reactions, Haitham would be a smarter choice";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Klee, Eula, Scara, Kokomi. Scara or Kokomi here are good, with Kokomi being a good healer and off-field hydro applier, Scara needs some supports and off-field subDPS";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Klee, Eula and Yoimiya here dont really deserve your attention if you still dont have 2-4 complete teams";
	// 	}
	// 	else if(answer == "3.8"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Klee, Eula, Scara, Kokomi. Scara or Kokomi here are good, with Kokomi being a good healer and off-field hydro applier, Scara needs some supports and off-field subDPS";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Leney, Yelan, Childe and Zhongli. New character, Leney has a questionable gameplay, therefore your options here would be anyone else, if you never pulled for shielder - it might be a right time to pull for Zhongli)";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Yelan being first priority, followed by Childe, Zhongli and Kokomi";
	// 	}
	// 	else if(answer == "4.0"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Leney, Yelan, Childe and Zhongli. New character, Leney has a questionable gameplay, therefore your options here would be anyone else, if you never pulled for shielder - it might be a right time to pull for Zhongli)";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Neuvillette, Hutao, Wriothesley, Venti. Obvious choice here is Neuvillette as he is the strongest and easy to play hydro DPS";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Neuvillette is the best option here, he is extremely strong";
	// 	}
	// 	else if(answer == "4.1"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Neuvillette, Hutao, Wriothesley, Venti. Obvious choice here is Neuvillette as he is the strongest and easy to play hydro DPS";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Furina, Baizhu, Cyno, Ayato. Rurina is your best option here as she is a very good hydro support, off-field dubDPS, healer. Pull Furina here";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Neuvillette and Furina are your best options here";
	// 	}
	// 	else if(answer == "4.2"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Furina, Baizhu, Cyno, Ayato. Rurina is your best option here as she is a very good hydro support, off-field dubDPS, healer. Pull Furina here";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Navia, Ayaka, Raiden, Yoimiya. Here i would reccomend to choose between Navia and Raiden, if you already have nay strong electro piece - go for Navia as shes a very strong andcheap character to build";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Navia and Furina are both great options here. Furina is more diversive but if you still dont have a geo team by now - you should consider pulling for Navia here";
	// 	}
	// 	else if(answer == "4.3"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Navia, Ayaka, Raiden, Yoimiya. Here i would reccomend to choose between Navia and Raiden, if you already have nay strong electro piece - go for Navia as shes a very strong andcheap character to build";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Xianyun, Nahida, Xiao, Yae. Xianyun is only gonna be useful in specific situations, not good for all characters, so its better to pull Nahida as she is more diversive";
	// 		document.getElementsByClassName("advice3")[0].innerText = "If you still dont have a geo team by now - you should consider pulling for Navia, Raiden and Nahida are still very good for a dendro based reaction teams, Yoimiya would be a good starter character as shes an easy character to play";
	// 	}
	// 	else if(answer == "4.4"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Xianyun, Nahida, Xiao, Yae. Xianyun is only gonna be useful in specific situations, not good for all characters, so its better to pull Nahida as she is more diversive";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Chiori, Itto, Neuvillette, Kazuha. Chiori is a decent character but not the best choice here as shes just a geo support, so if you dont have a dedicated geo team she would be better to skip. Itto is a decent option here if you still have no geo team. Neuvillette and kazuha are both great, they would be your best options here";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Neuvillette, Kazuha and Nahida would be the most diversive ones here, just go for them";
	// 	}
	// 	else if(answer == "4.5"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Chiori, Itto, Neuvillette, Kazuha. Chiori is a decent character but not the best choice here as shes just a geo support, so if you dont have a dedicated geo team she would be better to skip. Itto is a decent option here if you still have no geo team. Neuvillette and kazuha are both great, they would be your best options here";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Arlechino, Leney, Scara and Baizhu. Here Arlechino i think is the best option, she is pretty strong, has an interesting playstyle and fast to build, having good weapon choices even around 3 stars weapons";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Arlechino and Neuvillette are both very strong, i would be reccomending going for them, both are not as hard to build so choice is all about Pyro or Hydro";
	// 	}
	// 	else if(answer == "4.6"){
	// 		document.getElementsByClassName("advice1")[0].innerText = "Arlechino, Leney, Scara and Baizhu. Here Arlechino i think is the best option, she is pretty strong, has an interesting playstyle and fast to build, having good weapon choices even around 3 stars weapons";
	// 		document.getElementsByClassName("advice2")[0].innerText = "Sigewinne, Clorinde ..... Sigewinne is going to be a hydro healer and Clorinde is an electro DPS (more information incoming later)";
	// 		document.getElementsByClassName("advice3")[0].innerText = "Arlechino and Clorinde seems to be good options to pull for (not enough information)";
	// 	}
		
	// });




}



