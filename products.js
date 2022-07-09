const products = [
	{
		id1: 1,
		notice: "  نضمن لكم افضل المنتجات , بأفضل الأسعار , توصيل 58 ولاية ",
	   title1: "منتجاتنا ذات جودة عالية"  , 
	   title2: "غايتنا ارضاء زبائننا" , 
	   category1_title: 'كل المنتجات' ,
	   category2_title: ' معدات مهنية' ,
	   category3_title: 'منزل و حديقة ' ,
	   category4_title: ' الكترونيات و ألعاب ' ,
	   category5_title: ' تخييم و رياضة ', 
		link_facebook: 'https://www.facebook.com/BBrico.vente.enligne/',
        link_instegram: 'https://www.facebook.com/',
		nember: 'tel:0540643397',
		Adrar:1300, Chlef:700, Laghouat:700, Oum_El_Bouaghi:800, Batna:800, Béjaïa:700, Biskra:800, Béchar:100,Blida:400,Bouira:600,Tamanrasset:1400,Tébessa:800,Tlemcen:700,Tiaret:750,Tizi_Ouzou:600,Alger:400,Djelfa:700,Jijel:700,Sétif:700,Saïda:800,Skikda:700,Sidi_Bel_Abbès:700,Annaba:700,Guelma:800,Constantine:700,Médéa:600,Mostaganem:700,MSila:800,Mascara:800,Ouargla:900,Oran:700,El_Bayadh:1000,Illizi:1300,Bordj_Bou_Arreridj:700,Boumerdès:600,El_Tarf:800,Tindouf:1300,Tissemsilt:750,El_Oued:900,Khenchela:800,Souk_Ahras:800,Tipaza:600,Mila:700,Aïn_Defla:600,Naâma:1000,Aïn_Témouchent:700,Ghardaïa:900,Relizane:700,Timimoun:1300,Bordj_Badji_Mokhtar:1300,Ouled_Djellal:800,Beni_Abbes:1000,In_Salah:1400,In_Guezzam:1400,Touggourt:900,Djanet:1300,El_MGhair:900,El_Meniaa:900,
		
	},
	{
	
		id: 1 ,
		notice: "sold",
		image: 'product1/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product1/index.html' ,
		category: 'cat2',
		title: 'حذاء الأعمال الشاقة مصنوع من جلد متين لتوفير أمن وحماية تامة  ' ,
		description: 'المقاسات من 39 الى 44 '  ,
		price1: 4500, price:3900, percentage: 10 ,
		description2: ' تصميم رياضي  مناسب لتسلق الجبال والنشاطات الصعبة. يساعد على إمتصاص الصدمات في حوادث العمل. مصنوع من جلد عالي الجودة يوفر لك الراحة. حذاء مصمم خصيصا للأعمال الشاقة. طبقة سفلية مزدوجة مضاد للماء. '  ,
	},
	{
	
		id: 2 ,
		notice: "جديد",
		image: 'product2/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product2/index.html' ,
		category: 'cat5',
		title: 'برادة متحولة 48 لتر 4في1 Glacière Portative 48L' ,
		description: 'برادة مع طاولة سفر مدمجة و 2 كراسي وعجلات '  ,
		price1: 8500, price:7900, percentage: 10 ,
		description2: 'ثلاجة محمولة مثالية لإبقاء مأكولاتك طازجة بل وتبريدها أيضا أثناء التخييم، النزهات أو السفر، بسعة 48 لتر، مناسبة أيضا لتبريد زجاجات المشروبات أو الماء حتى سعة 2 لتر، حيث تتحول لتصبح طاولة سفر محمولة. كما تأتي مع عجلات وحامل قابل للتعديل لنقل سهل، ما يجعلها من القطع الأساسية أثناء رحلات التخييم والتنزه. ثلاجة محمولة مثالية لإبقاء مأكولاتك طازجة أو تبريدها. غلاف بلاستيكي مزدوج لعزل عن الحرارة الخارجية. تأتي مع عجلات وحامل قابل للتعديل لنقل سهل. تحوي زجاجات المشروبات بسعة 2 لتر. تتحول لتصبح طاولة سفر محمولة. تأتي مع كرسيين سفر مدمجين. مقبض قابل للطي لتسهيل الحمل. مثالية للتخييم، السفر والنزهات. تأتي بسعة كبيرة 48 لتر. الأبعاد: 116x51x40 سم. '  ,
	},
	{
	
		id: 3 ,
		notice: "promo",
		image: 'product3/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product3/index.html' ,
		category: 'cat5',
		title: 'فرشة هوائية قابلة للنفخ ونافخة يدوية ' ,
		description: 'فرشة مصنوعة من من الفينيل عالي الجودة ومزودة بتجاويف ما يجعلها مريحة جدًا '  ,
		price1: 4700, price:4200, percentage: 11 ,
		description2: 'نقدم لك العرض الخاص والمتكامل المكون من فرشة هوائية قابلة للنفخ ونافخة يدوية من شركة Bestway العالمية خصيصا لك لمرافقتك في جميع خرجاتك  الى التخييم والسفر، تم تصميم الفرشة من الفينيل عالي الجودة ما يجعلها مريحة جدًا، تكون جاهزة خلال دقيقتين فقط باستعمال النافخة اليدوية بفضل صمامها الكبير 2 في 1 الذي يسرع عملية الانتفاخ و الانكماش. فرشة مصنوعة من من الفينيل عالي الجودة ومزودة بتجاويف ما يجعلها مريحة جدًا مضادة للماء، مناسبة للاستخدام الداخلي والخارجي على حد سواء. مزودة بصمام ثنائي يساعد على الانكماش والانتفاخ السريع. مضخة نفخ سريع و مناسب لمختلف أنواع الصمامات. أبعاد الفرشة الهوائية: 185 × 76 × 22 سم. السعة الهوائية للنافخة: 0.85 لتر. الوزن الأقصى: 150 كلغ '  ,
	},
	{
	
		id: 4 ,
		notice: "sold",
		image: 'product4/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product4/index.html' ,
		category: 'cat2',
		title: 'أداة الدهان الإحترافية ومبتكرة من 8 قطع ' ,
		description: 'أداء سهل وطلاء أسرع '  ,
		price1: 3400, price:2600, percentage: 31 ,
		description2: 'مجموعة الدهان الإحترافية بـ 8 قطع لأداء سهل وطلاء أسرع. وعاء طلاء سهل التدفق مع قضيب تحريك و3 أعمدة تلسكوبية. فرشاة تملئ بالطلاء لكي لا تضيع الوقت في الإنحناء كثيرًا. تقوم بفتح غطاء الفرشاة وتعبئتها بـ 900 مل من الطلاء. مخصصة الأسطح الكبيرة مثل الجدران، الباب والسقف. أداة حواف متدفقة، قاطع زوايا وصينية إستراحة. قابلو للغسل وسهلة التنظيف لإعادة الاستخدام. يبلغ طول كل عمود 26 سم – إجمالي 78 سم. '  ,
	},
	{
	
		id: 5 ,
		notice: "sold",
		image: 'product5/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product5/index.html' ,
		category: 'cat2',
		title: 'محرك أوتوماتيكي أصلي من كراون Crown Pompe à Eau & Cerveau Suppresseur ' ,
		description: 'لضخ المياه بقوة ضغط عالية '  ,
		price1: 12000, price:10200, percentage: 12 ,
		description2: 'Voltage rating: 220V/50Hz. Rated Power: 370W. Max Current: 2.5 A Flow: 35L/min. Lift: 42 M. The Absorption Process: 8 M.'  ,
	},
	{
	
		id: 6 ,
		notice: "sold",
		image: 'product6/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product6/index.html' ,
		category: 'cat2',
		title: 'الرافعة الكهربائية المثالية لرفع الأغراض والمعدات الثقيلة دون عناء بقدرة تحمل عالية	' ,
		description: 'BEETRO Monte Charge 200kg '  ,
		price1: 18000, price:16700, percentage: 6 ,
		description2: 'هل لديك اغراض ثقيلة تريد حملها ؟ لدينا الحل الأمثل لك ، فبضغطة زر تكون اغراضك بين يديك حيث نقدم لك هذه الرافعة الاصلية من BETTRO بقدرة حمل تصل ل 200kg وطول 20m و تعمل بمقبس 220v ،والتي بفضلها ستتخلص من تعب الحمل والمسافة الطويلة التي تقطعها من اجل رفع الاغراض للطوابق العليا وبالتالي تحافظ على صحتك الي هي الصح عوض شرائك لاضعاف سعرها دواء، هي أفضل ب 5 مرات من الطرق التقليدية فحتما تحتاجها، اطلبها الآن قبل انتهاء الكمية !.'  ,
	},
	{
	
		id: 7 ,
		notice: "sold",
		image: 'product7/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product7/index.html' ,
		category: 'cat2',
		title: 'مسدس الطلاء الكهربائي الأصلي من كراون' ,
		description: ' استعمال سهل بأداء احترافي '  ,
		price1: 8600, price:6500, percentage: 24 ,
		description2: 'Fiche technique Poids : 2.9 kg Puissance Nominale: 500 w Tension : 220-230 V ~ 50/60 Hz Débit 1000 ml / min Longueur Du Tuyau 1.3 m”'  ,
	},
	{
	
		id: 8 ,
		notice: "sold",
		image: 'product8/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product8/index.html' ,
		category: 'cat3',
		title: 'علبة تخزين النقود المعدنية  Caisse A Monnaie Avec Serrure ' ,
		description: '  بتصميم أنيق على شكل كتاب '  ,
		price1: 3500, price:2500, percentage: 15 ,
		description2: 'علبة تعزين النقود المعدنية بتصميم أنيق جدا على شكل كتاب . متوفرة على فتحة لوضع النقود المعدنية . متوفرة على مفتاح لتأمين نقودك . الأبعاد 27x20x7 سم .'  ,
	},
	{
	
		id: 9 ,
		notice: "sold",
		image: 'product9/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product9/index.html' ,
		category: 'cat4',
		title: 'جهاز ومروحة تبريد الهاتف لحمايته من الحرارة العالي ' ,
		description: ' محرك قوي منخفض الضوضاء '  ,
		price1: 2900, price:1900, percentage: 25 ,
		description2: 'جهاز ومروحة تبريد الهاتف لحمايته من الحرارة العالية. 9 شفرات لتبديد الحرارة بقوة وإبقائه في حالة عادية. سهل الاستخدام ومناسب لجميع الهواتف المحمولة. مصنوع من مواد عالية الجودة ومقاومة للحرارة. مناسبة لأصحاب ألعاب الهواتف الذكية. تأتي بمحرك قوي منخفض الضوضاء. قابلة للشحن بكابل USB مرفق..'  ,
	},
	{
	
		id: 10 ,
		notice: "sold",
		image: 'product10/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product10/index.html' ,
		category: 'cat3',
		title: 'علّاقة معاطف خشبية سهلة التثبيت بتصميم مبتكر و أنيق ' ,
		description: ' تصميم مميز، توفر المساحة التي تحتاجها في المنزل أو المكتب '  ,
		price1: 3400, price:2400, percentage: 25 ,
		description2: 'قدرة استيعاب كبيرة. وزن خفيف وسهلة للتثبيت. الأبعاد : 51x13x3 سم. وزن : 1كغ.'  ,
	},
	{
	
		id: 11 ,
		notice: "sold",
		image: 'product11/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product11/index.html' ,
		category: 'cat5',
		title: 'سرير وكرسي بلاستيكي متعدد الوضعيات 3في1 قابل للطي' ,
		description: 'مريح للإسترخاء في الحدائق أو المسبح '  ,
		price1: 9700, price:8500, percentage: 25 ,
		description2: 'إذا كنت من محبي الإستلقاء في الحدائق أو المسبح فأنت حتما تحتاج الى كرسي إسترخاء محمول وقابل للطي، مصنوع بجودة عالية من البلاستيك، بعدة وضعيات حسب إختيارك بالإضافة إلى أنه قابل للتحول لسرير طويل يوفر لك راحة تامة. مثالي لمختلف الأرضيات وسهل النقل بفضل عجلاته المدمجة. كل ما تحتاج في خرجاتك أو حتى منزلك. – سرير طويل بلاستيكي للإسرخاء مريح ومثالي لخرجات التنزه والتخييم. – إمكانية طيه ليصبح كرسي للجلوس في حديقة منزلك. – متعدد الوضعيات ليوفر لك راحة تامة أثناء الإستلقاء. – قابل للطي بحجم ووزن مثاليان للحمل والتخزين. – مصنوع بجودة عالية من البلاستيك. – يأتي بعجلات مدمجة لنقل سهل. – أبعاد السرير: 76x165x95 سم. – أبعاد الكرسي: 76x100x95 سم.'  ,
	},
	{
	
		id: 12 ,
		notice: "sold",
		image: 'product12/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product12/index.html' ,
		category: 'cat5',
		title: 'برادة محمولة 13 لتر مصنوعة من بلاستيك عالي الجودة' ,
		description: 'مناسبة للرحلات والتنزه '  ,
		price1: 3400, price:3000, percentage: 10 ,
		description2: 'ثلاجة محمولة مثالية لإبقاء مأكولاتك طازجة بل وتبريدها أيضا أثناء التخييم، النزهات أو السفر، بسعة 13 لتر، مناسبة أيضا لتبريد زجاجات المشروبات أو الماء الصغيرة فقط،تصميم متين وخفيف الوزن بحامل قابل للدوران لنقل سهل، ما يجعلها من القطع الأساسية أثناء رحلات التخييم والتنزه. ثلاجة محمولة مثالية لإبقاء مأكولاتك طازجة أو تبريدها. غلاف بلاستيكي مزدوج لعزل عن الحرارة الخارجية. تحوي زجاجات المشروبات الصغيرة فقط. تأتي مع حامل قابل للدوران لنقل سهل. مثالية للتخييم، السفر والنزهات. تأتي بسعة كبيرة 13 لتر.'  ,
	},
	{
	
		id: 13 ,
		notice: "sold",
		image: 'product13/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product13/index.html' ,
		category: 'cat5',
		title: 'برادة المياه المحمولة بسعة 26 لتر Glacière D’eau Portative 26L' ,
		description: 'مناسبة لمختلف الرحلات و خرجات التنزه'  ,
		price1: 4200, price:3400, percentage: 10 ,
		description2: 'ثلاجة محمولة مثالية لإبقاء المشروبات منعشة لوقت طويل. غلاف بلاستيكي مزدوج لعزل عن الحرارة الخارجية. مثالية للتخييم، السفر والنزهات. تأتي مع مقبض لحملها بأمان. تأتي بسعة 26 لتر.'  ,
	},
	{
	
		id: 14 ,
		notice: "sold",
		image: 'product14/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product14/index.html' ,
		category: 'cat4',
		title: 'مسدس صنع الفقاعات الأوتوماتيكي Pistolet à bulles Automatique' ,
		description: ' بتصميم مبتكر لمتعة لامثيل لها مع الأصدقاء'  ,
		price1: 2800, price:2200, percentage: 15 ,
		description2: 'تبحث عن أداة تسلية لك ولأصقائك؟ نعرض لك جهاز صنع الفقاعات على شكل مسدس لإستعمال سهل بمجرد كبسة زر، يتميز بتصميمه المميز الذي يطلق عدد لا يحصى من الفقاعات الملونة، يعمل بالبطاريات ما يجعله محمول لمشاركة المرح مع الأصدقاء. سيجعلك تتمتع بالمنظر بمجرد إنطلاق الفقاعة الأولى. يأتي مع مروحة صغيرة مدمجة لإطلاق الفقاعات الملونة بسرعة عالية. يخلق جو مميز مليئ بالمتعة والحماس، يمكن إستعماله في الحفلات. يعمل بالبطاريات ما يجعله محمول لمشاركة المرح مع الأصدقاء. قم بنزع رأس المسدس لتحويله إلى مروحة صغيرة للأطفال. سهل التركيب و الإستخدام ب3 بطاريات من نوع AAA. الأبعاد: 20×7 سم.'  ,
	},
	{
	
		id: 15 ,
		notice: "sold",
		image: 'product15/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product15/index.html' ,
		category: 'cat4',
		title: 'حامل أرضي للهواتف و الأجهزة اللوحية مصنوع من الكاربون' ,
		description: ' بتصميم متين و صلب'  ,
		price1: 4200, price:3800, percentage: 15 ,
		description2: 'حامل قابل للدوران 360° لتسهيل استعمال الهاتف. متوافق مع الأجهزة من 3.5 الى 11 بوصة. توفر الذراع الطويلة مرونة لضبط الاتجاه. يوفر القوة الكافية لحمل الأجهزة. رأس دوار 360 درجة. الارتفاع: 1.4M.'  ,
	},
	{
	
		id: 16 ,
		notice: "sold",
		image: 'product16/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product16/index.html' ,
		category: 'cat3',
		title: 'سلة تقديم الفواكه السحرية قابلة للطي' ,
		description: ' مصنوعة من خشب عالي الجودة'  ,
		price1: 2200, price:1500, percentage: 15 ,
		description2: 'أنت بحاجة الى سلة في مطبخك لتقديم الفواكه؟ نقدم لك هذه السلة المميزة والقابلة للتعديل، التي يمكن إستعمالها كسلة لتقديم الفواكه أو كحامل ومسند للأطباق الساخنة. مصنوع من خشب عالي الجودة لتدوم طويلا. تصميم مبتكر بأرجل قابل للطي لتثبيت سهل على الأسطح. إمكانية إستعمالها كحامل ومسند للأطباق الساخنة. مصنوعة من خشب عالي الجودة لتدوم طويلا. مناسبة لتقديم مختلف أنواع الفواكه'  ,
	},
	{
	
		id: 17 ,
		notice: "sold",
		image: 'product17/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product17/index.html' ,
		category: 'cat2',
		title: 'مجموعة مفك البراغي مع أدوات الصيانة و مفاتيح سداسية' ,
		description: ' عالية الجودة للمهنيين'  ,
		price1: 3500, price:2500, percentage: 15 ,
		description2: 'مكنها التوصيل بالمفك الكهربائي . magnétiseur/démagnétiseur 1. 1 poignée en aluminium. tige universelle 1. pince à épiler 1. pied de biche 1 . 1 ventouse. triangle1.'  ,
	},
	{
	
		id: 18 ,
		notice: "sold",
		image: 'product18/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product18/index.html' ,
		category: 'cat3',
		title: 'مصباح LED جداري كبير الحجم فائق سطوع مستشعر للحركة مزود بلوحة شمسية وجهاز تحكم عن بعد' ,
		description: ' مثالي لتركيبه على المسارات في الحديقة أو مداخل البنايات أو حمامات السباحة'  ,
		price1: 8500, price:5600, percentage: 30 ,
		description2: ' شحن تلقائيا بالطاقة الشمسية فالنهار في 6ساعات للإضاءة تفوق 10 ساعات. يوفر إضاءة فائقة السطوع في الليل إضافة بنطاق وزاوية إضاءة واسعة. مقاوم للماء، الحرارة ومناسب لمختلف الأجواء المناخية IP66. جهاز تحكم عن بعد لتعديل الإضاءة وغيرها على بعد 15 متر. سهل جدا للتركيب على مختلف الأسطح والجدران. مزود بمستشعر يضيء في حالة وجود حركة. يأتي بـ6 لمبات بإضاءة فائقة بقوة 238 واط. الأبعاد: 41×16 سم.'  ,
	},
	{
	
		id: 19 ,
		notice: "sold",
		image: 'product19/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product19/index.html' ,
		category: 'cat3',
		title: 'جهاز مبيد للبعوض و الحشرات الطائرة بفعالية كبيرة' ,
		description: ' صنوع من مواد ذات جودة عالية مضاد للبعوض والحشرات'  ,
		price1: 2900, price:2600, percentage: 12 ,
		description2: 'من كليا، بدون روائح وبدون مواد كيمائية. فلتر قابل للإزالة لتنظيفه بكل سهولة. اقتصادي للطاقة ويدوم طويلا. القوة الكهربائية :5W الجهد الكهربائي :DC5V'  ,
	},
	{
	
		id: 20 ,
		notice: "sold",
		image: 'product20/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product20/index.html' ,
		category: 'cat3',
		title: 'أريكة هوائية مريحة بتصميم شبابي أنيق وعصري قابلة للنفخ بسهولة' ,
		description: ' من الشركة الفرنسية Bestway'  ,
		price1: 5600, price:4900, percentage: 12 ,
		description2: 'مقاومة للماء ومناسبة للاستعمال الداخلي والخارجي. غرفتين هوائيتين قابلتين للنفخ بسهولة مع صمام أمان محكم. مصنوعة بمواد متينة عالية الجودة مع قماش علوي ناعم. تصميم شبابي أنيق وعصري مناسب للمنزل أو خرجات التخييم. قدرة تحمل تصل إلى 100 كغ. الأبعاد: 112 × 112 × 66 سم'  ,
	},
	{
	
		id: 21 ,
		notice: "sold",
		image: 'product21/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product21/index.html' ,
		category: 'cat2',
		title: 'رافعة يدوية شديدة التحمل لرفع الأغراض و المعدات الثقيلة بكل أريحية' ,
		description: ' هيكل فولاذي مقاوم للصدأ'  ,
		price1: 7500, price:6900, percentage: 12 ,
		description2: 'قوة حمل تصل الى 907 كغ. مثالي لرفع المركبات والآلات الثقيلة. خطاف الإرساء مزود بمزلاج أمان. قدرة رفع تصل حتى لـ 20 متر. سلك رفع متين بقطر 5 مم. كابل بطول : 10 متر.'  ,
	},
	{
	
		id: 22 ,
		notice: "sold",
		image: 'product22/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product22/index.html' ,
		category: 'cat5',
		title: 'آلة شد عضلات البطن مناسبة لمختلف تمارين اللياقة البدنية' ,
		description: ' عضلات بطن مشدودة وقوية'  ,
		price1: 7500, price:6900, percentage: 12 ,
		description2: 'هاز رياضي لتمارين شد وتقوية عضلات البطن. يساعد على ممارسة تمارين شد البطن في المنزل. آلة قابلة للطي وسهلة التخزين بعد إكمال التمارين. مقابض مطاطية من الجهتين لإستعمال فعال. تأتي بمقعد مبطن وبكرات ظهر مريحة.'  ,
	},
	{
	
		id: 23 ,
		notice: "sold",
		image: 'product23/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product23/index.html' ,
		category: 'cat2',
		title: 'آلة التنظيف بالضغط العالي الأصلية من كراون مع عجلات و مقبض لتحريكها بسهولة' ,
		description: ' Haute Pression 1400W 5.5L/min'  ,
		price1: 22000, price:15000, percentage: 30 ,
		description2: 'Pompes à 3 pistons axiaux. Protection thermique intégrée. Roues et Poignée pour un déplacement facile. Tension 220-230V ~ 50/60Hz. Puissance d’entrée nominale : 1400W. Classe de protection II. Degré de protection : IPX5. Pression nominale: 70bar (7MPa). Max. pression : 100 bar (10MPa). Débit nominal : 5,5 L / min. Max. débit : 6,2 L / min. Température nominale : 0-40°C. Max. pression d’entrée : 0.7MPa. Poids : 6.8 Kg.'  ,
	},
	{
	
		id: 24 ,
		notice: "sold",
		image: 'product24/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product24/index.html' ,
		category: 'cat3',
		title: 'مضرب لاسلكي مضاد للبعوض بمنفذ شحن USB قابلة لإعادة الشحن' ,
		description: ' أصلي من sonashi'  ,
		price1: 3800, price:2800, percentage: 20 ,
		description2: 'الكثير منا يعاني من لسعات البوض و صوته خصوصا في الليل قبل النوم . لهذا فأن مضرب طارد البعوض أنسب حل لهذه المشكلة . المميز في هذا المضرب أنه أصلي من sonashi كما أنه فعال ضد جميع الحشرات أغلبها الذباب و البعوض. يعمل عن طريق الشحنات الكهربائية . اي عندما يلامس جسما ما (البعوضة) يصعقها تلقائيا و لا مجال لبقائها حية. أرى أن المضرب حل مفيد ضد المعاناة مع الحشرات. يناسب حجمه الغرف او المطبخ او في الحديقة حيث يكثر البعوض . قابل لأعادة الشحن من خلال كابل USB يأتي مع المنتج.'  ,
	},
	{
	
		id: 25 ,
		notice: "sold",
		image: 'product25/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product25/index.html' ,
		category: 'cat5',
		title: 'مصباح الرأس الساطع بحزام قابل للتعديل أثناء رحلاتك التخييمية' ,
		description: ' مع خاصية الزوم للمسافات الطويلة'  ,
		price1: 3800, price:2800, percentage: 20 ,
		description2: 'نقدم لك هذا المصباح بدرجة سطوع عالية مع قابلية تعديل تركيز الإضاءة، حيث يتميز بتصميمه المتين مع حزام قابل للتعديل ليناسبك بسهولة، بالإضافة إلى بطاريته التي تدوم طويلا سيكون هذا المصباح أفضل رفيق لك في رحلات التخييم. – بطاريتين قابلة للشحن4800mAh مع شاحن كهربائي وآخر للسيارات 12V. – متعدد الإستعمالات كالتخييم والصيد وركوب الدراجات الهوائية وغيرها. – خاصية الزوم لتعديل تركيز الإضاءة مناسب للمسافات البعيدة. – 4 وضعيات للضوء، 3 بضوء LED والأخير بلون أزرق. – حزام قابل للتعديل ليناسب حجم الرأس بسهولة.'  ,
	},
	{
	
		id: 26 ,
		notice: "sold",
		image: 'product26/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product26/index.html' ,
		category: 'cat5',
		title: 'خيمة شبه أوتوماتيكية سريعة التجهيز قابلة للطي' ,
		description: ' مناسبة لأربعة أشخاص للتمتع بالرحلات'  ,
		price1: 4500, price:3900, percentage: 20 ,
		description2: 'نقدم لك هذا المصباح بدرجة سطوع عالية مع قابلية تعديل تركيز الإضاءة، حيث يتميز بتصميمه المتين مع حزام قابل للتعديل ليناسبك بسهولة، بالإضافة إلى بطاريته التي تدوم طويلا سيكون هذا المصباح أفضل رفيق لك في رحلات التخييم. – بطاريتين قابلة للشحن4800mAh مع شاحن كهربائي وآخر للسيارات 12V. – متعدد الإستعمالات كالتخييم والصيد وركوب الدراجات الهوائية وغيرها. – خاصية الزوم لتعديل تركيز الإضاءة مناسب للمسافات البعيدة. – 4 وضعيات للضوء، 3 بضوء LED والأخير بلون أزرق. – حزام قابل للتعديل ليناسب حجم الرأس بسهولة.'  ,
	},
	{
	
		id: 27 ,
		notice: "sold",
		image: 'product27/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product27/index.html' ,
		category: 'cat5',
		title: 'الفرن المحمول عالي الأداء بحقيبة عملية سهلة الحمل' ,
		description: ' مثالي للطهي أثناء سفرك أو مكان العمل'  ,
		price1: 5500, price:4800, percentage: 20 ,
		description2: 'بمميزاته الرائعة يعد الفرن المحمول Portable Gas Stove مثالي للطهي أثناء سفرك أو رحلاتك أو حتى مكان العمل، بتصميمه الرائع و وزنه الخفيف مصنوع بكفاءة عالية يساعدك على نقله باستمرار من مكان إلى آخر بسرعة وسهولة. بالإضافة إلى ذلك، يتم إزالة الموقد بسهولة، مما يجعل عملية التنظيف سهلة للغاية بعد الاستعمال. سهل الحمل و النقل بفضل حقيبته عالية الجودة. متعدد الاستعمالات يمكنك الطهي في أي مكان أثناء التخييم أو السفر أو حتى مقر العمل. حرارة عالية تصل إلى 8000 وحدة حرارية. مزود بقفل آمن يقوم بتأمين قارورة الغاز. مرفق مع عدد 2 قارورة غاز محمولة صغيرة بسعة 500 ملل (متوفرة في الأسواق دائما). كما أنه متوافق ويمكن تشغيله بإستعمال أي قارورة غاز بوتان عادية. الوزن: 1800غ. أبعاد المنتج: 31 × 33 × 11 سم. أبعاد سطح الطهي: 20 × 20 سم'  ,
	},
	{
	
		id: 28 ,
		notice: "sold",
		image: 'product28/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product28/index.html' ,
		category: 'cat5',
		title: 'طاولة ألمنيوم محمولة 4 مقاعد مناسبة لمحبي الإصطياف أو النزهات الخارجية خفيفة' ,
		description: ' متينة قابلة للطوي'  ,
		price1: 13800, price:12800, percentage: 20 ,
		description2: 'أروع طاولة محمولة لصيف أكثر رفاهية، بسيطة .جميلة .سهلة الإستعمال في جميع الأماكن الخارجية مثل الغابة، شاطئ البحر والحدائق، عملية ومصنوعة من ألمنيوم عالي الجودة لتكون أكثر صلابة ومتانة، يمكن أن تكون طاولة مع أربعة مقاعد أو تحولها إلى مائدة، يمكن تركيبها بسهولة خلال أقل من دقيقتين، بعد الإنتهاء من إستعمالها يمكن إرجاعها لوضعها الطبيعي على شكل حقيبة يد سهلة الحمل أو التوظيب في السيارة، تمتع بصيف ورحلات خارجية مع العائلة والأصدقاء مع هذه الطاولة العجيبة والرائعة. الكمية محدودة'  ,
	},
	{
	
		id: 29 ,
		notice: "sold",
		image: 'product29/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product29/index.html' ,
		category: 'cat5',
		title: 'عوامة هوائية قابلة للنفخ للأطفال الصغار مع واقي من أشعة الشمس' ,
		description: ' سباحة آمنة وممتعة'  ,
		price1: 3400, price:2600, percentage: 15 ,
		description2: 'العوامات من الوسائل الضرورية عند الأطفال في المسبح أو عند الذهاب إلى الشاطئ، لكن عوامات Bestway ليست مجرد عوامات عادية، اترك طفلك الصغير يستمتع ببرودة مياه المسبح أو البحر مع عوامة الأطفال المريحة بغطاء واقي من أشعة الشمس، تمكنه من الطفو فوق المياه بكل أمان. آمنة يمكنها رفع طفلك بسهولة ومثالية لتعليمه أساسيات السباحة. مزودة بغطاء واقي من أشعة الشمس لحماية طفلك طول الوقت. قابلة للنفخ في دقائق معدودة بواسطة مضخة هوائية. مصنوعة بمواد الفينيل عالية الجودة لتدوم طويلا. الأبعاد: 80× 85 سم.'  ,
	},
	{
	
		id: 30 ,
		notice: "sold",
		image: 'product30/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product30/index.html' ,
		category: 'cat3',
		title: 'كرسي بلاستيكي بتصميم عصري و أنيق للجلوس بشكل مريح للغاية' ,
		description: ' مصنوع من البلاستبك المتين'  ,
		price1: 4200, price:3500, percentage: 18 ,
		description2: ' كرسي بلاستيكي بتصميم عصري و أنيق للجلوس بشكل مريح للغاية Chaise Fauteuil Moderne Et Elégante En Plastique Pour S’asseoir Très Confortablement'  ,
	},
	{
	
		id: 31 ,
		notice: "sold",
		image: 'product31/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product31/index.html' ,
		category: 'cat3',
		title: 'آلة غسيل منزلية ذو جودة عالية بقدرة إستيعاب 16كغ ' ,
		description: ' مع ضمان سلامة المنتج'  ,
		price1: 4200, price:23000, percentage: 18 ,
		description2: ' تحتوي على مؤقت لكل دورة مع عدة مؤشرات أخرى . تحتوي على أزرار الغسيل و تفريغ المياه . المقاسات : 40x86x73.5 سم. قدرة الاستيعاب : 16كغ . مدخلات الطاقة :650واط . قوة الغسيل:450واط. قوة الدوران: 200واط . القوة : V220، 50 hz. اللون : أبيض.'  ,
	},
	{
	
		id: 32 ,
		notice: "sold",
		image: 'product32/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product32/index.html' ,
		category: 'cat2',
		title: 'مولد كهربائي بالبنزين أصلي ذو قوة و فعالية عالية ' ,
		description: ' A Essence 750W'  ,
		price1: 22000, price:18600, percentage: 15 ,
		description2: 'مولد كهربائي بالبنزين أصلي ذو قوة و فعالية عالية BEETRO Générateur Electrique A Essence 750W BE0072 قوة الكهربائية :220-240V. الجهد الكهربائي :750W. خزان الوقود :4.2لتر.'  ,
	},
	{
	
		id: 33 ,
		notice: "sold",
		image: 'product33/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product33/index.html' ,
		category: 'cat2',
		title: 'مطرقة حفر كهربائية متعددة الوظائف بنظام حفر متطور مع مقبض مريح قابل للدوران' ,
		description: ' من شركة CROWN الأمريكية'  ,
		price1: 12500, price:9900, percentage: 20 ,
		description2: '3 Fonctions : Perforateur – Perceuse – Burin. Tige de profondeur. Prise Souple. Une poignée ergonomique latérale 360°. Tension : 220-230V ～ 50 / 60HZ. Puissance : 850W. Vitesse à vide : 800 tr/min. Taux d’impact : 3200 BPM. Bois : 30mm. Acier : 13mm. Béton : 26mm. Poids : 5.3 Kg.'  ,
	},
	{
	
		id: 34 ,
		notice: "sold",
		image: 'product34/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product34/index.html' ,
		category: 'cat2',
		title: 'جهاز ضبط المستوى بالليزر أصلي من بيترو بثلاث أعمدة مستوى' ,
		description: ' الحفاظ على الدقة رأسياً وأفقياً'  ,
		price1: 3000, price:2500, percentage: 20 ,
		description2: 'مستوى الليزر في البناء،يتم استخدامه في البناء للحفاظ على الدقة رأسياً وأفقياً،يوجد في المستوى شعاع ليزر  يُظهر سيولة هذا السطح أو ذاك في المستوى Y أو X . مثالي للمهام المنزلية و الأراضي و السيراميك إلخ .. . يحتوى ضوء الليزر على قفل تشغيل و توقيف . متوفر على قياسات سنتمترية . مستوى قياس ذو 3 أوضاع . طول الشريط 250 سم'  ,
	},
	{
	
		id: 35 ,
		notice: "sold",
		image: 'product35/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product35/index.html' ,
		category: 'cat2',
		title: 'آلة التلحيم المحمولة الأصلية من كراون مع حقيبة لأدوات التلحيم سهلة للحمل' ,
		description: ' اأداء عالي'  ,
		price1: 18500, price:15600, percentage: 16 ,
		description2: 'Technologie de soudage MMA. Technologie IGBT. Alimentation monophasée. Protection contre la température. Dispositif de réduction de tension. Contrôle du courant de soudage. Démarrage facile. Compteur de courant de soudage. Système de refroidissement. Tension d’entrée nominale : 180-265 V Fréquence nominale : 50/60 Hz Capacité d’entrée nominale : 6,6 kVA Plage de réglage actuelle : 30-150 A Tension de sortie nominale : 21,2-26 V Tension à vide : 80 V Diamètre d’électrode de soudure : 2,5-3,2 mm Cycle de service nominal (40°C) : 35% Efficacité :83%'  ,
	},
	{
	
		id: 36 ,
		notice: "sold",
		image: 'product36/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product36/index.html' ,
		category: 'cat2',
		title: 'آلة التلحيم المحمولة الأصلية من كراون مع حقيبة لأدوات التلحيم سهلة للحمل' ,
		description: ' اأداء عالي'  ,
		price1: 16000, price:13860, percentage: 13 ,
		description2: 'Technologie IGBT. Alimentation monophasée. Protection contre la température. Dispositif de réduction de tension. Contrôle du courant de soudage. Démarrage facile. Compteur de courant de soudage. Système de refroidissement. Tension d’entrée nominale : 180-265 V Fréquence nominale : 50/60 Hz Capacité d’entrée nominale : 6,6 kVA Plage de réglage actuelle : 30-150 A Tension de sortie nominale : 21,2-26 V Tension à vide : 80 V Diamètre d’électrode de soudure : 2,5-3,2 mm Cycle de service nominal (40°C) : 35% Efficacité :83% Poids : 3,6 kg التوفر:متوفر في المخزون'  ,
	},
	{
	
		id: 37 ,
		notice: "sold",
		image: 'product37/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product37/index.html' ,
		category: 'cat5',
		title: 'الدراجة الكهربائية لإعادة التأهيل Vélo de Reducation Electrique Pour Bras Et Jambes' ,
		description: 'العلاج الطبيعي الخاص بك'  ,
		price1: 27800, price:24800, percentage: 13 ,
		description2: 'هي دراجة صغيرة لكبار السن والأشخاص (المعاقين) والأشخاص الذين عانوا من السكتات الدماغية والأشخاص الذين يعانون من إصابات (عضلات أو التواءات) بإعادة التأهيل بفضل محركها الكهربائي الذي يلعب دور أخصائي العلاج الطبيعي الخاص بك ، وهذا يجعلك تتحرك دون جهد من جانبك .6 برامج تلقائية مدمجة،برنامج يدوي واحد،12 إعداد سرعة،سرعة قصوى: 80 دورة في الدقيقة. سهلة التجميع مع توفر جميع الملحقات ، في غضون دقائق قليلة ودون طلب أدوات. دواسة قابلة للتعديل بناءً على احتياجاتك. تصميم خفيف الوزن وقابل للطي. شاشة إلكترونية و لوحة تحكم.'  ,
	},
	{
	
		id: 38 ,
		notice: "sold",
		image: 'product38/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product38/index.html' ,
		category: 'cat4',
		title: 'نظارات ثلاثية الأبعاد للواقع الإفتراضي من كوندور مناسبة للهواتف' ,
		description: 'ثلاثية الأبعاد'  ,
		price1: 3500, price:2800, percentage: 20 ,
		description2: 'يمكنك عن طريقها مشاهدة الأفلام ثلاثية الأبعاد ولعب ألعاب مع تجربة الواقع الإفتراضي. الألاف من التطبيقات المميزة والمجانية (VR) في متجر play store و app store. مصنوع من مواد ذات جودة عالية وعدسات أصلية. تمتع بعرض بانورامي 360 درجة.'  ,
	},
	{
	
		id: 39 ,
		notice: "sold",
		image: 'product39/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product39/index.html' ,
		category: 'cat4',
		title: 'وحدة تحكم عالية الجودة قابلة للشحن مناسبة لألعاب الهواتف الذكية المختلفة' ,
		description: 'PUBG / Fortnite'  ,
		price1: 3800, price:3200, percentage: 12 ,
		description2: 'نقدم لك وحدة تحكم مثالية ألعاب الهواتف الذكية كـ PUBG / Fortnite، تمكنك من التحرك، الإلتفاف، التصويب وإطلاق النار في وقت واحد باستخدام أصابع السبابة وتقضي على مشكلة استخدام الإبهام فقط لإجراء جميع العمليات، قم بتحسين تجربة لعبك فهي أفضل مساعد على أن تكون محترفًا في لعبتك. وحدة تحكم عالية الجودة مناسبة لألعاب الهواتف الذكية المختلفة. متوافق مع حجم الهاتف القابل للتطبيق: 4.7 إلى 6.5 بوصة. تمكنك من القيام بجميع العمليات باستخدام أصابع السبابة. تساعدك على أن تكون محترفًا في لعبتك. تقضي على مشكلة استخدام الإبهام فقط. تدوم لمدة 80 ساعة من وقت اللعب. بطارية مدمجة قابلة لإعادة الشحن.'  ,
	},
	{
	
		id: 40 ,
		notice: "sold",
		image: 'product40/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product40/index.html' ,
		category: 'cat2',
		title: 'مفك براغي لاسلكي أصلي من كراون يعمل باتجاهين' ,
		description: 'مقبض قابل للدوران و بطارية مدمجة'  ,
		price1: 3800, price:3400, percentage: 12 ,
		description2: 'Vissage et Dévissage. Vitesse a couple variable permet une grande variété d’applications. Boitier portatif très pratique pour arranger les embouts. Rotation 90° pour une meilleure utilisation dans les espaces étroits. Verrouillage automatique de la broche. Légère pour meilleurs confort d’utilisation. Indicateur de charge. Design ergonomique Chargement de batterie facile et rapide. Lampe torche auxiliaire intégré. Vitesses à Vide : 200 min-1. Tension : 3.6V Batterie Lithium-ion 1.5 Ah. Temps de chargement : 3 – 5h Ralentissement du couple de rotation : 3.5 Nm'  ,
	},
	{
	
		id: 41 ,
		notice: "sold",
		image: 'product41/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product41/index.html' ,
		category: 'cat4',
		title: 'حامل ثلاثي تلسكوبي لالتقاط صور احترافية بثبات عالي' ,
		description: 'مناسب للكاميرات والهواتف'  ,
		price1: 4600, price:3900, percentage: 20 ,
		description2: 'هل أنت من هواة التقاط الصور الاحترافية؟ هذا الحامل الثلاثي التلسكوبي سيكون خيارك المثالي لأخذ صور أكثر ثباتا ووضوحا، مناسب لمختلف ألات التصوير الاحترافية والهواتف الذكية، مزود بـ3 أرجل قابلة للطي والتعديل لمقاومة كل أشكال الاهتزاز أثناء أخذ الصور سوآءا بالهاتف أو الكاميرا، بالإضافة الى مستوى توازن ومعدل ارتفاع مدمج للالتقاط الصور بدقة متناهية. 3أرجل متينة قابلة للطي والتعديل مختلف الاسطح. امكانية تعديل زاوية تصوير بفضل مقبض التعديل. مستوى توازن مدمج للالتقاط الصور بدقة متناهية. تثبيت الكاميرا وجعلها في مستوى مريح للعين. توازن واستقرار لصور أكثر وضوحا وثباتا. إمكانية تعديل الطول (التمديد، الثني). حقيبة متينة مدمجة للحمل والنقل. أقصى ارتفاع: 1250مم. أدنى ارتفاع: 450مم. الوزن : 620غ'  ,
	},
	{
	
		id: 42 ,
		notice: "sold",
		image: 'product42/img/1.png',image2: 'img/2.png',image3: 'img/3.png',image4: 'img/4.png',image5: 'img/5.png',
		link: 'product42/index.html' ,
		category: 'cat5',
		title: 'مجرفة قابلة للطي متعددة الاستعمالات مع معدات مناسبة لك في خرجات التخييم' ,
		description: 'ذات استعمالات متعددة'  ,
		price1: 4200, price:3400, percentage: 20 ,
		description2: 'نقدم لك كل ما تحتاجه في منزلك وحديقتك مع هذه المجرفة العملية التي تسهل عليك العديد من مهامك اليومية بفضل استعمالاتها المتعددة، تتميز بحواف مسننة للقطع، وتحتوي على مفك للبراغي، ومفتاح إشعال النار بقضيب المغنيسيوم وبوصلة فهي تعد أداة مثالية للتخييم او خرجات التجول في الغابات. امكانية استخدامها كمنشار، مجرفة، فأس، قاطع أسلاك أو مفتاح قارورات. تحتوي على مفك للبراغي، بوصلة وأداة لكسر الزجاج في الطوارئ. تحتوي على مفتاح إشعال النار بقضيب المغنيسيوم مع سكين للقطع. حجم صغير وخفيفة الوزن قابلة للطي لتسهيل نقلها. تحتوي على محفظة صغيرة للتخزين المجرفة. مثالية للتخييم او خرجات التجول في الغابات. مصنوع بمعدن معالج جودة عالية ومتين.'  ,
	},





















];
