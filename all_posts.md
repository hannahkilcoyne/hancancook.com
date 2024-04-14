---
title: All Posts
layout: page
---

# All Posts

<table>
    <tbody>
        {% for post in site.posts %}
        <tr>
            <td>
              <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b. %-d, %Y" }}</time>
            </td>
            <td>
                <a href="{{ post.url }}">{{ post.title }}</a>
            </td>
        </tr>
        {% endfor %}
    </tbody>
</table>

