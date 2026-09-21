# wednightrides.github.io
website

# Contribution guidelines

### Adding Ride Posts
Add new ride detail pages to `all_collections/_posts`.

### Adding Static Pages
Static, long-lived pages (e.g. guides, FAQs, about pages) live in the `pages/` directory:

1. Create a markdown file in `pages/` (e.g. `pages/faq.md`).
2. Add front matter with the title:
   ```markdown
   ---
   title: Frequently Asked Questions
   ---

   Your content here...
   ```
   - Layout (`page`) and permalink (`/:basename/`, e.g. `/faq/`) are set automatically by default in `_config.yml`.
   - You can optionally override `permalink` or other metadata in the front matter if needed.

3. To display the page link in the top navigation bar, add an entry to `_data/navigation.yml`:
   ```yaml
   - title: "FAQ"
     url: "/faq/"
   ```

# Local testing

If you want to test the website before pushing it live, follow the [installation instructions](https://jekyllrb.com/docs/installation/), then run `bundle exec jekyll serve`. Website will be running locally at: [http://localhost:4000](http://localhost:4000).
