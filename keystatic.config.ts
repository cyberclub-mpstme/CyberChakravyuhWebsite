import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: process.env.NODE_ENV === 'development' ? { kind: 'local' } : {
    kind: 'github',
    repo: 'yuki-ame/CyberChakravyuhWebsite'
  },
  ui: {
    brand: { name: 'Cyber Chakravyuh Admin' },
  },
  collections: {
    events: collection({
      label: 'Events',
      slugField: 'title',
      path: 'src/content/events/*',
      format: { data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Event Title' } }),
        image: fields.image({
          label: 'Cover Image',
          directory: 'public/images/events',
          publicPath: '/images/events/',
        }),
        date: fields.date({ label: 'Event Date', validation: { isRequired: true } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'CTF Competition', value: 'ctf' },
            { label: 'Workshop', value: 'workshop' },
            { label: 'Guest Lecture', value: 'guest-lecture' },
            { label: 'Hackathon', value: 'hackathon' },
          ],
          defaultValue: 'workshop',
        }),
        description: fields.text({ label: 'Short Description', multiline: true }),
        featured: fields.checkbox({ label: 'Featured Event', defaultValue: false }),
        countdownTarget: fields.datetime({ label: 'Countdown Target (for featured events)' }),
        registrationLink: fields.url({ label: 'Registration Link' }),
      },
    }),

    newsletters: collection({
      label: 'Newsletters',
      slugField: 'title',
      path: 'src/content/newsletters/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        image: fields.image({
          label: 'Cover Image',
          directory: 'public/images/newsletters',
          publicPath: '/images/newsletters/',
        }),
        issueNumber: fields.integer({ label: 'Issue Number', validation: { isRequired: true } }),
        date: fields.date({ label: 'Publish Date', validation: { isRequired: true } }),
        description: fields.text({ label: 'Short Description', multiline: true }),
        pdfLink: fields.url({ label: 'PDF Link (optional)' }),
        content: fields.markdoc({ label: 'Content', options: { image: false } }),
      },
    }),

    team: collection({
      label: 'Team Members',
      slugField: 'name',
      path: 'src/content/team/*',
      format: { data: 'yaml' },
      schema: {
        name: fields.slug({ name: { label: 'Full Name' } }),
        image: fields.image({
          label: 'Profile Photo',
          directory: 'public/images/team',
          publicPath: '/images/team/',
        }),
        role: fields.text({ label: 'Role / Title', validation: { isRequired: true } }),
        department: fields.select({
          label: 'Department',
          options: [
            { label: 'Faculty Mentor', value: 'faculty-mentor' },
            { label: 'Leadership', value: 'leadership' },
            { label: 'Technical', value: 'technical' },
            { label: 'Events', value: 'events' },
            { label: 'Marketing', value: 'marketing' },
            { label: 'Content', value: 'content' },
            { label: 'Design', value: 'design' },
            { label: 'Operations', value: 'operations' },
          ],
          defaultValue: 'technical',
        }),
        order: fields.integer({ label: 'Display Order', defaultValue: 10 }),
        linkedin: fields.url({ label: 'LinkedIn URL' }),
        github: fields.url({ label: 'GitHub URL' }),
        twitter: fields.url({ label: 'Twitter/X URL' }),
      },
    }),

    achievements: collection({
      label: 'Achievements',
      slugField: 'title',
      path: 'src/content/achievements/*',
      format: { data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Achievement Title' } }),
        event: fields.text({ label: 'Event / Competition Name', validation: { isRequired: true } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description', multiline: true }),
        icon: fields.text({ label: 'Icon (emoji)', defaultValue: '🏆' }),
      },
    }),
  },
});
