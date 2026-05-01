const categories = [
    { id: "gundelik", name: "Gündəlik", icon: "🤯" },
    { id: "pul", name: "Pul", icon: "💰" },
    { id: "meshurlar", name: "Məşhurlar", icon: "🎬" },
    { id: "iyrenc", name: "İyrənc", icon: "🤢" },
    { id: "survival", name: "Survival", icon: "🏕️" },
    { id: "mekteb", name: "Məktəb", icon: "🎓" },
    { id: "sosial", name: "Sosial", icon: "💬" },
    { id: "yemek", name: "Yemək", icon: "🍕" }
];

const questions = {
    gundelik: [
        { left: "Bakıda yaşamaq", right: "Kənddə yaşamaq" },
        { left: "Həmişə gecikmək", right: "Heç vaxt gecikməmək" },
        { left: "Yayda isti çay içmək", right: "Qışda dondurma yemək" },
        { left: "Avtobusda ayaq üstə qalmaq", right: "Tıxacda taksidə olmaq" },
        { left: "Telefonunu evdə unutmaq", right: "Pulunu evdə unutmaq" },
        { left: "Həmişə metroda getmək", right: "Həmişə piyada getmək" }
    ],
    pul: [
        { left: "İndi 1000 AZN", right: "10 il sonra 100,000 AZN" },
        { left: "Səyahət etmək (pulsuz)", right: "Villada yaşamaq (gedə bilməzsən)" },
        { left: "Hər gün yerdən 10 AZN tapmaq", right: "Ayda 1 dəfə 500 AZN tapmaq" },
        { left: "Kasıb, amma xoşbəxt", right: "Zəngin, amma tənha" }
    ],
    yemek: [
        { left: "Ömür boyu yalnız dönər yemək", right: "Ömür boyu yalnız kabab yemək" },
        { left: "Şirin çay içmək", right: "Açıq çay içmək" },
        { left: "Nənənin hazırladığı yeməklər", right: "Ən bahalı restoran yeməkləri" },
        { left: "Çox acı yemək", right: "Çox şirin yemək" },
        { left: "Dolma yeməmək", right: "Çay içməmək" },
        { left: "Qutabda ət sevmək", right: "Qutabda göyərti sevmək" }
    ],
    sosial: [
        { left: "Toyda mərkəzdə oynamaq", right: "Toyda kənarda sakit oturmaq" },
        { left: "Hər kəsin səni tanıması", right: "Heç kimin səni tanımaması" },
        { left: "Həmişə sözünü üzə demək", right: "Heç vaxt heç kimi incitməmək" },
        { left: "Ən yaxın dostunla küsmək", right: "Sevgilindən ayrılmaq" }
    ],
    meshurlar: [
        { left: "Röya ilə duet oxumaq", right: "Eyyub Yaqubovla eyni masada oturmaq" },
        { left: "Dünya ulduzu olmaq", right: "Azərbaycanda xalq artisti olmaq" }
    ],
    iyrenc: [
        { left: "Dişsiz qalmaq", right: "Saçsız qalmaq" },
        { left: "Xarab yemək yemək", right: "Çirkli su içmək" },
        { left: "Hamamda böcək görmək", right: "Yeməyindən tük çıxması" }
    ],
    survival: [
        { left: "Meşədə tək qalmaq", right: "Səhrada tək qalmaq" },
        { left: "Aysberqdə yaşamaq", right: "Vulkan yaxınlığında yaşamaq" }
    ],
    mekteb: [
        { left: "Həmişə '5' almaq, amma sevilməmək", right: "Həmişə '3' almaq, amma populyar olmaq" },
        { left: "Dərsi partanın altında yatmaq", right: "Müəllimdən qaçıb getmək" },
        { left: "Ev tapşırığını unutmaq", right: "İmtahana gecikmək" }
    ]
};
