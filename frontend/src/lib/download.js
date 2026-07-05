/**
 * downloadTextFile — triggers a real browser download of generated text
 * content, no backend needed. Used by CourseCard's "Download Brochure"
 * button now; the same function is the natural fit for Phase 9's payment
 * receipt download.
 */
export function downloadTextFile(filename, content) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * buildCourseBrochure — plain-text brochure content for a course.
 *
 * This is a genuinely working download, not a placeholder button — but
 * it's a plain-text summary, not a designed PDF. A properly laid-out PDF
 * brochure (letterhead, photos, branding) is a design asset, not a
 * client-side code task; Phase 10's polish pass is the natural place to
 * swap this for a real PDF generated from a template if you want one.
 */
export function buildCourseBrochure(course, businessName = 'Vermé') {
  const divider = '─'.repeat(44);
  return [
    `${businessName} Beauty Academy`,
    divider,
    course.name,
    divider,
    '',
    course.description,
    '',
    `Duration:     ${course.duration}`,
    `Mode:         ${course.mode}`,
    `Course Fee:   ₹${course.fee.toLocaleString('en-IN')}`,
    `Eligibility:  ${course.eligibility}`,
    '',
    divider,
    'Interested? Apply directly from the Academy page, or reach out on',
    'WhatsApp using the chat button on our website.',
    divider,
  ].join('\n');
}
