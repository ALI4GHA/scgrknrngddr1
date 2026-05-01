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
        { left: "İndi 1000 AZN", right: "10 il sonra 10,000 AZN" },
        { left: "Çox pulun olsun, amma meymuna oxşa", right: "Vəhşicəsinə yaraşıqlı ol, amma acından günorta dur" },
        { left: "1 milyon manat, amma heç vaxt istədiyini ala bilməmək", right: "Az pulun olsun, amma seçim azadlığı" },
        { left: "Hər gün yerdən 10 AZN tapmaq", right: "Ayda 1 dəfə 500 AZN tapmaq" },
        { left: "Pul üçün sevmədiyin işi gör, amma çox qazan", right: "Sevdiyin işi gör, amma az qazan" },
        { left: "Çox zəngin ol, amma heç kim səni səmimi sevməsin", right: "Az pulun olsun, amma hamı səni həqiqətən sevsin" },
        { left: "1 milyon manat qazan, amma həyatının 10 ilini itir", right: "Heç nə qazanma, amma 10 il əlavə yaşa" },
        { left: "Çox pulun olsun, amma ailənlə münasibətin korlansın", right: "Pulun az olsun, amma ailənlə çox yaxın ol" },
        { left: "İstədiyin hər şeyi ala bil, amma heç nədən zövq ala bilmə", right: "Az şey ala bil, amma hər şeydən həzz al" },
        { left: "Çox pul qazan, amma hər kəs səndən istifadə etməyə çalışsın", right: "Az pulun olsun, amma ətrafında səmimi insanlar olsun" },
        { left: "Ömür boyu işləmədən pul qazan, amma heç vaxt azad hiss etmə", right: "Çox işləməli ol, amma öz həyatına nəzarət et" },
        { left: "Çox varlı ol, amma hər qərarın başqaları tərəfindən idarə olunsun", right: "Az pulun olsun, amma bütün qərarları özün ver" },
        { left: "1 milyon manatın olsun, amma heç kimə kömək edə bilmə", right: "Az pulun olsun, amma sevdiklərinə dəstək ola bil" },
        { left: "Çox pulun olsun, amma daima itirmək qorxusu ilə yaşa", right: "Pulun az olsun, amma sabah üçün qorxun az olsun" },
        { left: "Məşhur və varlı ol, amma şəxsi həyatın hamıya açıq olsun", right: "Normal gəlirin olsun, amma həyatın tam şəxsi qalsın" },
        { left: "Pul üçün sevmədiyin işi gör, amma çox qazan", right: "Sevdiyin işi gör, amma az qazan" },
        { left: "Çox pulun olsun, amma dostlarının çoxu saxta olsun", right: "Az pulun olsun, amma iki həqiqi dostun olsun" },
        { left: "Hər ay çox pul qazan, amma heç vaxt istirahət edə bilmə", right: "Az qazan, amma istədiyin vaxt dincələ bil" },
        { left: "Çox pulun olsun, amma keçmişdəki səhvlərin hamıya məlum olsun", right: "Az pulun olsun, amma reputasiyan təmiz qalsın" },
        { left: "Varlı ol, amma həmişə tək hiss et", right: "Kasıb ol, amma heç vaxt tək qalmadığını hiss et" },
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
