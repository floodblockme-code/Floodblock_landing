function createFloodBlockQuoteForm() {
  const form = FormApp.create('FloodBlock Quote Request');
  form.setDescription('Get a personalized quote for FloodBlock installation.');
  form.addTextItem().setTitle('Your Name').setRequired(true);
  form.addTextItem().setTitle('Email Address').setRequired(true);
  form.addTextItem().setTitle('Phone Number').setRequired(false);
  form.addTextItem().setTitle('Property Type (e.g., Residential, Commercial)').setRequired(false);
  form.addParagraphTextItem().setTitle('Tell us about your flood protection needs').setRequired(false);
  form.setConfirmationMessage('Thanks! Your enquiry has been received. We will contact you shortly.');
  form.setCollectEmail(true);
  Logger.log('Published URL: ' + form.getPublishedUrl());
  Logger.log('Edit URL (keep private): ' + form.getEditUrl());
  Logger.log('Embed URL: ' + form.getPublishedUrl() + '?embedded=true');
}