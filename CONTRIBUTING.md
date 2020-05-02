## Contributing

You are more than welcome to contribute to `web-skills` in any way you please, including:

* Updating documentation.
* Fixing spelling and grammar.
* Adding tests.
* Fixing issues and suggesting new features.
* Blogging, tweeting, and creating tutorials linking to `http://andreasbm.github.io/web-skills`.
* Reaching out to [@andreasmehlsen](https://twitter.com/andreasmehlsen) on Twitter.
* Submit an issue or a pull request.

If you want to make some changes to `web-skills` you are very welcome to open a PR with the additions. I can't promise that every PR will get merged, but I'll try to respond to everyone.

## Getting Started

You can find all of the data in the `data` folder. Here, you'll find that skills are part of areas and areas are part of collections. I'll encourage you to get familiar with the structure of the data before getting your hands dirty.

In the `assets` folder you can find all of the images for the skills. The path of the images follows a naming convention based on the collection and area the skill is a part of which is `assets/{{ collection_name }}/{{ area_name }}/{{ skill_name }}.svg`. As an example, the image for the skill "Relational Databases" which is a part of the area "Databases" which is a part of the collection "Databases & Servers" is located at `assets/databases-and-servers/databases/relational-databases.svg`. The design with all assets is located in the `design/design.sketch` file. If you can't open the file you can add the new image to the correct path in the `assets` folder instead. I'll make sure to add it to the sketch file.

To serve the website locally you'll need to run `npm run s`. This will spin up a local dev server and open the browser.

If you have any questions feel free to open an issue or send a PM to [@andreasmehlsen](https://twitter.com/andreasmehlsen) on Twitter.



