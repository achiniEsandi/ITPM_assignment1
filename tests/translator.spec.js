import { test, expect } from '@playwright/test';

/* -------------------- Setup -------------------- */

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

async function verifyTranslation(page, input, expected) {
  const inputBox = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputBox = page.locator(
    'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50'
  );

  await inputBox.fill(input);
  await expect(outputBox).toHaveText(expected, { timeout: 150000 });
}

/* ---------------- POSITIVE FUNCTIONAL (1–25) ---------------- */

test('Pos_Fun_001', async ({ page }) => {
  await verifyTranslation(page,
    'mama adha uni yanna inne. oyaath ennakoo apith ekka lectures yanna.',
    'මම අද uni යන්න ඉන්නේ. ඔයාත් එන්නකෝ අපිත් එක්ක lectures යන්න.'
  );
});

test('Pos_Fun_002', async ({ page }) => {
  await verifyTranslation(page,
    'mee paara viBhaagaya oyaata hoDHAtama karanna puluvan',
    'මේ පාර විභාගය ඔයාට හොඳටම කරන්න පුලුවන්'
  );
});

test('Pos_Fun_003', async ({ page }) => {
  await verifyTranslation(page,
    'oyaa kaalaya apathee yaevvoth kavadhaavath viBhaagaya samath venna baeri venavaa',
    'ඔයා කාලය අපතේ යැව්වොත් කවදාවත් විභාගය සමත් වෙන්න බැරි වෙනවා'
  );
});

test('Pos_Fun_004', async ({ page }) => {
  await verifyTranslation(page,
    'anee mee! oyaa ehema kivvaa kiyalaa mata eeka karanna baee.',
    'අනේ මේ! ඔයා එහෙම කිව්වා කියලා මට ඒක කරන්න බෑ.'
  );
});

test('Pos_Fun_005', async ({ page }) => {
  await verifyTranslation(page,
    'mama adha udhenma avadhi vunaa',
    'මම අද උදෙන්ම අවදි වුනා'
  );
});

test('Pos_Fun_006', async ({ page }) => {
  await verifyTranslation(page,
    'eeka harima lassanayi nee',
    'ඒක හරිම ලස්සනයි නේ'
  );
});

test('Pos_Fun_007', async ({ page }) => {
  await verifyTranslation(page,
    'vaessa himin himin mee paeththatath enavaa vagee nee',
    'වැස්ස හිමින් හිමින් මේ පැත්තටත් එනවා වගේ නේ'
  );
});

test('Pos_Fun_008', async ({ page }) => {
  await verifyTranslation(page,
    'api labana maasayeedhi hambavemu',
    'අපි ලබන මාසයේදි හම්බවෙමු'
  );
});

test('Pos_Fun_009', async ({ page }) => {
  await verifyTranslation(page,
    'aa ehemadha? naehae! mQQ dhaenagena hitiyee naehae.',
    'ආ එහෙමද? නැහැ! මං දැනගෙන හිටියේ නැහැ.'
  );
});

test('Pos_Fun_010', async ({ page }) => {
  await verifyTranslation(page,
    'mama kammalkaarayek haetiyata jiivithee aluthin patan ganna poddakvath kaemathi vunee naee',
    'මම කම්මල්කාරයෙක් හැටියට ජීවිතේ අලුතින් පටන් ගන්න පොඩ්ඩක්වත් කැමති වුනේ නෑ'
  );
});

test('Pos_Fun_011', async ({ page }) => {
  await verifyTranslation(page,
    'mata samavenna! obata haeki ikmanin mata ee liyavilla labaa dhiya haeki dha?',
    'මට සමවෙන්න! ඔබට හැකි ඉක්මනින් මට ඒ ලියවිල්ල ලබා දිය හැකි ද?'
  );
});

test('Pos_Fun_012', async ({ page }) => {
  await verifyTranslation(page,
    'oyaa adha thiyena session ekata join venna dha inne? mata Microsoft teams link eka share karannako. Course Web eka mata access karanna baee ne.',
    'ඔයා අද තියෙන session එකට join වෙන්න ද ඉන්නේ? මට Microsoft teams link එක share කරන්නකො. Course Web එක මට access කරන්න බෑ නේ.'
  );
});

test('Pos_Fun_013', async ({ page }) => {
  await verifyTranslation(page,
    'Congratulations! maQQ dhaekkaa linkedin post eka oyaata promotion ekak laebunaa kiyalaa.',
    'Congratulations! මං දැක්කා linkedin post එක ඔයාට promotion එකක් ලැබුනා කියලා.'
  );
});

test('Pos_Fun_014', async ({ page }) => {
  await verifyTranslation(page,
    'HR manager mata kivvaa mage reporting manager va CC karalaa mage request eka ewanna kiyalaa. CV ekayi NIC ekeyi copies uth attach karanna oonee ee email ekatama.',
    'HR manager මට කිව්වා mage reporting manager ව CC කරලා mage request එක එwඅන්න කියලා. CV එකයි NIC එකෙයි copies උත් attach කරන්න ඕනේ ඒ email එකටම.'
  );
});

test('Pos_Fun_015', async ({ page }) => {
  await verifyTranslation(page,
`vidheesha katayuthu, vidheesha raekiyaa saha sQQchaaraka amaathYA vijitha heerath mahathaa saha shrii lQQkaa sQQchaaraka sQQvarDhana vaedasatahana kriyaathmaka kiriima saDHAhaa vuu janaaDhipathi kaaryAsaaDhaka balakaayee saamaajikayan athara hamuvak janaaDhipathi kaaryaalayeedhii adha (30) peravaruvee paevaethviNi.

meratata paemiNena vidheeshiiya sQQchaarakayanta naeraBum sThaanavalata pivisiima pahasu vanu piNisa dijital praveesha pathrayak hadhunvaa dhiimee kriyaavaliyehi labaa aethi pragathiya menma sQQchaarakayangee viisaa sambanDha katayuthu kadinamin sidhu kiriima kerehith mema saakachChaaveedhii avaDhaanaya yomu keriNi.`,
`විදේශ කටයුතු, විදේශ රැකියා සහ සංචාරක අමාත්‍ය විජිත හේරත් මහතා සහ ශ්‍රී ලංකා සංචාරක සංවර්ධන වැඩසටහන ක්‍රියාත්මක කිරීම සඳහා වූ ජනාධිපති කාර්යසාධක බලකායේ සාමාජිකයන් අතර හමුවක් ජනාධිපති කාර්යාලයේදී අද (30) පෙරවරුවේ පැවැත්විණි.

මෙරටට පැමිණෙන විදේශීය සංචාරකයන්ට නැරඹුම් ස්ථානවලට පිවිසීම පහසු වනු පිණිස ඩිජිටල් ප්‍රවේශ පත්‍රයක් හදුන්වා දීමේ ක්‍රියාවලියෙහි ලබා ඇති ප්‍රගතිය මෙන්ම සංචාරකයන්ගේ වීසා සම්බන්ධ කටයුතු කඩිනමින් සිදු කිරීම කෙරෙහිත් මෙම සාකච්ඡාවේදී අවධානය යොමු කෙරිණි.`
  );
});

test('Pos_Fun_016', async ({ page }) => {
  await verifyTranslation(page,
    "monavaa!! ohuta kisiseethma ayithiyak naee obata esee pavasanna. aeyi oba kisi dheyak pavasannee naethuva sitiyee??!",
    "මොනවා!! ඔහුට කිසිසේත්ම අයිතියක් නෑ ඔබට එසේ පවසන්න. ඇයි ඔබ කිසි දෙයක් පවසන්නේ නැතුව සිටියේ??!"
  );
});

test('Pos_Fun_017', async ({ page }) => {
  await verifyTranslation(page,
`api heta udhenma   bas ekata     nagimu needha? 
ethakota apita   kalin yanna puluvan office ekata`,
`අපි හෙට උදෙන්ම   බස් එකට     නගිමු නේද? 
එතකොට අපිට   කලින් යන්න පුලුවන් office එකට`
  );
});

test('Pos_Fun_018', async ({ page }) => {
  await verifyTranslation(page,
    'ayiyoo! mata amathaka vunaa eeka genna adha. kamak naedhdha maQQ heta genaavoth?',
    'අයියෝ! මට අමතක වුනා ඒක ගෙන්න අද. කමක් නැද්ද මං හෙට ගෙනාවොත්?'
  );
});

test('Pos_Fun_019', async ({ page }) => {
  await verifyTranslation(page,
    'oyaalaa group details dhaalaa register vunaadha?',
    'ඔයාලා group details දාලා register වුනාද?'
  );
});

test('Pos_Fun_020', async ({ page }) => {
  await verifyTranslation(page,
    'oyaata mokakdha magen kerenna oonee?',
    'ඔයාට මොකක්ද මගෙන් කෙරෙන්න ඕනේ?'
  );
});

test('Pos_Fun_021', async ({ page }) => {
  await verifyTranslation(page,
    'suba udhaeesanak veevaa oba saemata!',
    'සුබ උදෑසනක් වේවා ඔබ සැමට!'
  );
});

test('Pos_Fun_022', async ({ page }) => {
  await verifyTranslation(page,
    'loku loku scene meheth venavaa lu',
    'ලොකු ලොකු scene මෙහෙත් වෙනවා ලු'
  );
});

test('Pos_Fun_023', async ({ page }) => {
  await verifyTranslation(page,
    'MERN stack kiyanne giya paara api ITP project ekata use karapu tech stack eka',
    'MERN stack කියන්නෙ ගිය පාර අපි ITP project එකට use කරපු tech stack එක'
  );
});

test('Pos_Fun_024', async ({ page }) => {
  await verifyTranslation(page,
    'apee iskoolee 7.30 a.m. idhan 1.30 p.m. venakan thiyenavaa',
    'අපේ ඉස්කෝලේ 7.30 a.m. ඉදන් 1.30 p.m. වෙනකන් තියෙනවා'
  );
});

test('Pos_Fun_025', async ({ page }) => {
  await verifyTranslation(page,
    'mata paan piti 1kg dhenna puluvan dha?',
    'මට පාන් පිටි 1kg දෙන්න පුලුවන් ද?'
  );
});

/* ---------------- NEGATIVE (26–35) ---------------- */

test('Neg_Fun_001', async ({ page }) => {
  await verifyTranslation(page,
    'oyaa main building 7th floor ekata gihin LIC va hambavelaa new building ekee 2nd floor ekata ikmanatama enna.',
    'ඔයා main building 7ත් floor එකට ගිහින් LIC ව හම්බවෙලා new building එකේ 2න්ඩ් floor එකට ඉක්මනටම එන්න.'
  );
});

test('Neg_Fun_002', async ({ page }) => {
  await verifyTranslation(page,
    "mama mee sem eketh kohomahari deans' list ekata select venavaa",
    'මම මේ සෙම් එකෙත් කොහොමහරි deans\' list එකට select වෙනවා'
  );
});

test('Neg_Fun_003', async ({ page }) => {
  await verifyTranslation(page,
    'Bahraini Dinar kiyanne Bahrain ratee currency eka',
    'ඹහ්‍රෛනි Dinar කියන්නෙ Bahrain රටේ currency එක'
  );
});

test('Neg_Fun_004', async ({ page }) => {
  await verifyTranslation(page,
    'eyaava mata hambunee naee. maQQ eyaata kiyanna oonee "I am sorry for everything" kiyalaa',
    'එයාව මට හම්බුනේ නෑ. මං එයාට කියන්න ඕනේ "ඉ am sorry for everything" කියලා'
  );
});

test('Neg_Fun_005', async ({ page }) => {
  await verifyTranslation(page,
    'I am really really sorry. What should I do? Never have I ever doubted you. Please forgive me.',
    'ඉ am really really sorry. What should ඉ ඩො? Never have ඉ ever doubted you. Please forgive මෙ.'
  );
});

test('Neg_Fun_006', async ({ page }) => {
  await verifyTranslation(page,
    'oyaamataennakivveenaeenee',
    'ඔයාමටැන්නකිව්වේනෑනේ'
  );
});

test('Neg_Fun_007', async ({ page }) => {
  await verifyTranslation(page,
    'Intern ekak set vunaa dha oyaata?',
    'Intern එකක් සෙට් වුනා ද ඔයාට?'
  );
});

test('Neg_Fun_008', async ({ page }) => {
  await verifyTranslation(page,
    'oyaage student id ekee copy ekak dhunnaa needha eyaalata?',
    'ඔයාගෙ student ඉඩ් එකේ copy එකක් දුන්නා නේද එයාලට?'
  );
});

test('Neg_Fun_009', async ({ page }) => {
  await verifyTranslation(page,
    'Her birthday is on 2003.08.20',
    'Her birthday ඉස් on 2003.08.20'
  );
});

test('Neg_Fun_010', async ({ page }) => {
  await verifyTranslation(page,
    'Oyaage cgpa eka kiiyadha?',
    'ඔයාගෙ cග්ප එක කීයද?'
  );
});

/* ---------------- UI ---------------- */

test('Pos_UI_001 - Help popup opens', async ({ page }) => {
  await page.getByRole('button', { name: 'Help' }).click();
  await expect(page.getByRole('heading', { name: 'Singlish Character Mapping' })).toBeVisible();
});
