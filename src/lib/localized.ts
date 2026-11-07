export type Locale = 'en' | 'ar';
export type LocalizedText = { en: string; ar: string };

export const locales: Locale[] = ['en', 'ar'];

export const localeMeta: Record<Locale, { lang: string; dir: 'ltr' | 'rtl'; label: string; switchLabel: string }> = {
  en: { lang: 'en', dir: 'ltr', label: 'English', switchLabel: 'العربية' },
  ar: { lang: 'ar', dir: 'rtl', label: 'العربية', switchLabel: 'English' },
};

export type Service = { slug: string; title: LocalizedText; outcome: LocalizedText; scope: LocalizedText; faq: Array<{ q: LocalizedText; a: LocalizedText }> };
export type Project = { slug: string; title: LocalizedText; region: LocalizedText; clientType: LocalizedText; result: LocalizedText; previewTitle?: LocalizedText; previewResult?: LocalizedText };
export type Download = { title: LocalizedText; status: LocalizedText; type: LocalizedText };

export const services: Service[] = [
  { slug: 'drilling-support', title: { en: 'Drilling support', ar: 'دعم عمليات الحفر' }, outcome: { en: 'Keep the field requirement moving with a clear technical brief.', ar: 'حافظ على تقدم متطلبات الموقع من خلال موجز فني واضح.' }, scope: { en: '[BRO-approved drilling support scope]', ar: '[نطاق دعم الحفر المعتمد من BRO]' }, faq: [{ q: { en: 'What equipment is available?', ar: 'ما المعدات المتاحة؟' }, a: { en: '[Equipment list pending BRO approval]', ar: '[قائمة المعدات بانتظار اعتماد BRO]' } }] },
  { slug: 'well-services-workover', title: { en: 'Well services and workover', ar: 'خدمات الآبار والإصلاح' }, outcome: { en: 'Plan well intervention with the right people, equipment, and controls.', ar: 'خطط لتدخلات الآبار باستخدام الأشخاص والمعدات والضوابط المناسبة.' }, scope: { en: '[BRO-approved well services and workover scope]', ar: '[نطاق خدمات الآبار والإصلاح المعتمد من BRO]' }, faq: [{ q: { en: 'Which well environments are supported?', ar: 'ما بيئات الآبار التي يتم دعمها؟' }, a: { en: '[Operating environments pending BRO approval]', ar: '[بيئات التشغيل بانتظار اعتماد BRO]' } }] },
  { slug: 'equipment-rental', title: { en: 'Equipment rental', ar: 'تأجير المعدات' }, outcome: { en: 'Source field equipment with a documented handover path.', ar: 'وفّر معدات الموقع من خلال مسار تسليم موثق.' }, scope: { en: '[BRO-approved equipment rental scope]', ar: '[نطاق تأجير المعدات المعتمد من BRO]' }, faq: [{ q: { en: 'What is the rental period?', ar: 'ما مدة التأجير؟' }, a: { en: '[Rental terms pending BRO approval]', ar: '[شروط التأجير بانتظار اعتماد BRO]' } }] },
  { slug: 'inspection-ndt', title: { en: 'Inspection and NDT', ar: 'الفحص والاختبارات غير المتلفة' }, outcome: { en: 'Turn inspection requirements into traceable evidence.', ar: 'حوّل متطلبات الفحص إلى أدلة قابلة للتتبع.' }, scope: { en: '[BRO-approved inspection and NDT scope]', ar: '[نطاق الفحص والاختبارات المعتمد من BRO]' }, faq: [{ q: { en: 'Which standards apply?', ar: 'ما المعايير المطبقة؟' }, a: { en: '[Applicable standards pending BRO approval]', ar: '[المعايير المطبقة بانتظار اعتماد BRO]' } }] },
  { slug: 'maintenance-turnaround', title: { en: 'Maintenance and turnaround', ar: 'الصيانة والتوقفات المخططة' }, outcome: { en: 'Coordinate maintenance work with a practical delivery plan.', ar: 'نسّق أعمال الصيانة من خلال خطة تنفيذ عملية.' }, scope: { en: '[BRO-approved maintenance and turnaround scope]', ar: '[نطاق الصيانة والتوقفات المعتمد من BRO]' }, faq: [{ q: { en: 'Can the scope be phased?', ar: 'هل يمكن تنفيذ النطاق على مراحل؟' }, a: { en: '[Phasing approach pending BRO approval]', ar: '[منهجية التنفيذ المرحلي بانتظار اعتماد BRO]' } }] },
  { slug: 'logistics-fuel-supply', title: { en: 'Logistics and fuel supply', ar: 'الخدمات اللوجستية وتوريد الوقود' }, outcome: { en: 'Move people, materials, and fuel with a clear operating brief.', ar: 'انقل الأفراد والمواد والوقود من خلال موجز تشغيلي واضح.' }, scope: { en: '[BRO-approved logistics and fuel supply scope]', ar: '[نطاق الخدمات اللوجستية وتوريد الوقود المعتمد من BRO]' }, faq: [{ q: { en: 'Which regions are covered?', ar: 'ما المناطق التي يتم تغطيتها؟' }, a: { en: '[Coverage regions pending BRO approval]', ar: '[مناطق التغطية بانتظار اعتماد BRO]' } }] },
];

export const projects: Project[] = [
  { slug: 'project-01', title: { en: '[Project title pending approval]', ar: '[عنوان المشروع بانتظار الاعتماد]' }, region: { en: '[Region pending approval]', ar: '[المنطقة بانتظار الاعتماد]' }, clientType: { en: '[Client type pending approval]', ar: '[نوع العميل بانتظار الاعتماد]' }, result: { en: '[Measured result pending evidence]', ar: '[النتيجة القابلة للقياس بانتظار الدليل]' }, previewTitle: { en: '[Preview: Desert drilling support]', ar: '[معاينة: دعم حفر في الصحراء]' }, previewResult: { en: '[Preview: 00% measured result]', ar: '[معاينة: نتيجة قياس 00٪]' } },
  { slug: 'project-02', title: { en: '[Project title pending approval]', ar: '[عنوان المشروع بانتظار الاعتماد]' }, region: { en: '[Region pending approval]', ar: '[المنطقة بانتظار الاعتماد]' }, clientType: { en: '[Client type pending approval]', ar: '[نوع العميل بانتظار الاعتماد]' }, result: { en: '[Measured result pending evidence]', ar: '[النتيجة القابلة للقياس بانتظار الدليل]' }, previewTitle: { en: '[Preview: Well services campaign]', ar: '[معاينة: حملة خدمات آبار]' }, previewResult: { en: '[Preview: 00 days saved]', ar: '[معاينة: توفير 00 يومًا]' } },
  { slug: 'project-03', title: { en: '[Project title pending approval]', ar: '[عنوان المشروع بانتظار الاعتماد]' }, region: { en: '[Region pending approval]', ar: '[المنطقة بانتظار الاعتماد]' }, clientType: { en: '[Client type pending approval]', ar: '[نوع العميل بانتظار الاعتماد]' }, result: { en: '[Measured result pending evidence]', ar: '[النتيجة القابلة للقياس بانتظار الدليل]' }, previewTitle: { en: '[Preview: Integrated field logistics]', ar: '[معاينة: خدمات لوجستية متكاملة]' }, previewResult: { en: '[Preview: 00% target pending approval]', ar: '[معاينة: هدف 00٪ بانتظار الاعتماد]' } },
];

export const downloads: Download[] = [
  { title: { en: 'Company profile', ar: 'ملف الشركة' }, status: { en: '[Document pending BRO approval]', ar: '[المستند بانتظار اعتماد BRO]' }, type: { en: 'PDF', ar: 'PDF' } },
  { title: { en: 'Vendor pre-qualification pack', ar: 'حزمة التأهيل المسبق للمورد' }, status: { en: '[Document pending BRO approval]', ar: '[المستند بانتظار اعتماد BRO]' }, type: { en: 'PDF', ar: 'PDF' } },
  { title: { en: 'Key policies', ar: 'السياسات الرئيسية' }, status: { en: '[Documents pending BRO approval]', ar: '[المستندات بانتظار اعتماد BRO]' }, type: { en: 'PDF', ar: 'PDF' } },
];

export const t = (value: LocalizedText, locale: Locale) => value[locale];
export const localePath = (locale: Locale, path = '') => `/${locale}${path ? `/${path.replace(/^\//, '').replace(/\/$/, '')}` : ''}/`;
