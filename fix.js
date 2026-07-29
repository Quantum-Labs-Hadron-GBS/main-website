const fs = require('fs');

const pages = [
  { path: 'src/app/services/atlassian/page.tsx', video: 'https://res.cloudinary.com/ax6dtcht/video/upload/v1785324524/I_want_light_themed_D_abstrac_ogyy4a.mp4', rotated: false },
  { path: 'src/app/services/aws-cloud/page.tsx', video: 'https://res.cloudinary.com/ax6dtcht/video/upload/v1785324517/now_in_this_same_theme_like_amrowr.mp4', rotated: false },
  { path: 'src/app/services/bmc/page.tsx', video: 'https://res.cloudinary.com/ax6dtcht/video/upload/v1785326078/From_Klickpin.com-_Smart_entryway_makeover_ideas_for_a_polished_look_people_will_notice_using_practical_inspiration_that_still_feels_highly_aesthe_4_dc5qsc.mp4', rotated: true },
  { path: 'src/app/services/freshworks/page.tsx', video: 'https://res.cloudinary.com/ax6dtcht/video/upload/v1785326079/From_Klickpin.com-_Smart_entryway_makeover_ideas_for_a_polished_look_people_will_notice_using_practical_inspiration_that_still_feels_highly_aesthe_1_uetggx.mp4', rotated: true },
  { path: 'src/app/services/ivanti/page.tsx', video: 'https://res.cloudinary.com/ax6dtcht/video/upload/v1785326082/From_Klickpin.com-_Smart_entryway_makeover_ideas_for_a_polished_look_people_will_notice_using_practical_inspiration_that_still_feels_highly_aesthe_3_f90ffh.mp4', rotated: false },
  { path: 'src/app/services/low-code/page.tsx', video: 'https://res.cloudinary.com/ax6dtcht/video/upload/v1785326083/From_Klickpin.com-_Smart_entryway_makeover_ideas_for_a_polished_look_people_will_notice_using_practical_inspiration_that_still_feels_highly_aesthe_2_iubfgk.mp4', rotated: true },
  { path: 'src/app/services/microsoft-cloud/page.tsx', video: 'https://res.cloudinary.com/ax6dtcht/video/upload/v1785326085/From_Klickpin.com-_Smart_entryway_makeover_ideas_for_a_polished_look_people_will_notice_using_practical_inspiration_that_still_feels_highly_aesthe_hzkbhs.mp4', rotated: true },
  { path: 'src/app/services/salesforce/page.tsx', video: 'https://res.cloudinary.com/ax6dtcht/video/upload/v1785326087/414330dbc452b6e40004da2889ac168c_nuytqv.mp4', rotated: true },
  { path: 'src/app/services/sap/page.tsx', video: 'https://res.cloudinary.com/ax6dtcht/video/upload/v1785326099/From_Klickpin.com-_Refresh_these_fresh_ways_to_style_your_craft_project_that_bring_style_function_and_personality_together_for_a_stylish_result_th_qpwyfp.mp4', rotated: true },
  { path: 'src/app/services/service-now/precision-bridge/page.tsx', video: 'https://res.cloudinary.com/ax6dtcht/video/upload/v1785326115/From_Klickpin.com-_Classy_DIY_gift_ideas_that_feel_fresh_elevated_and_surprisingly_easy_to_recreate_at_home_for_people_who_want_stylish_ideas_on_a_brkwa8.mp4', rotated: true },
  { path: 'src/app/services/service-now/tennon/page.tsx', video: 'https://res.cloudinary.com/ax6dtcht/video/upload/v1785326115/From_Klickpin.com-_Classy_DIY_gift_ideas_that_feel_fresh_elevated_and_surprisingly_easy_to_recreate_at_home_for_people_who_want_stylish_ideas_on_a_brkwa8.mp4', rotated: true }
];

pages.forEach(p => {
  let content = fs.readFileSync(p.path, 'utf8');
  content = content.replace(/heroBgUrl=".*?"/, \heroVideoUrl="\"\\n      heroVideoRotated={\}\);
  fs.writeFileSync(p.path, content);
});
console.log('done');
