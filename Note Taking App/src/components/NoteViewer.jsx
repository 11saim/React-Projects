import React from "react";
import date from "../assets/date.png";
import folder from "../assets/folder-icon.png";
import bold from "../assets/bold.png";
import italic from "../assets/italic.png";
import underLine from "../assets/underline.png";
import image from "../assets/image.png";
import link from "../assets/link.png";
import table from "../assets/table.png";

export default function NoteViewer() {
  return (
    <div className="NoteViewer">
      <div className="note-title">
        <h1>Reflection on the Month of June</h1>
      </div>

      <div className="note-details">
        <div className="date">
          <div className="title">
            <img src={date} alt="date" />
            <p>Date</p>
          </div>
          <div className="creation-date">
            <p>1/1/2025</p>
          </div>
        </div>
        <div className="folder">
          <div className="title">
            <img src={folder} alt="folder" />
            <p>Folder</p>
          </div>
          <div className="folder-name">
            <p>Personal</p>
          </div>
        </div>
      </div>

      <div className="tools">
        <div className="selection">
          <div className="style">
            <select name="">
              <option value="paragraph">Paragraph</option>
            </select>
            <select name="font-size">
              <option value="16">16</option>
            </select>
          </div>
        </div>
        <div className="text-style">
          <div className="bold">
            <img src={bold} alt="bold" />
          </div>
          <div className="italic">
            <img src={italic} alt="italic" />
          </div>
          <div className="under-line">
            <img src={underLine} alt="under-line" />
          </div>
        </div>
        <div className="media">
          <div className="image">
            <img src={image} alt="image" />
          </div>
          <div className="link">
            <img src={link} alt="link" />
          </div>
        </div>
        <div className="table">
          <img src={table} alt="table" />
        </div>
      </div>

      <div className="content">
        <p>
          It's hard to believe that June is already over! Looking back on the
          month, there were a few highlights that stand out to me. One of the
          best things that happened was getting promoted at work. I've been
          working really hard and it's great to see that effort recognized. It's
          also exciting to have more responsibility and the opportunity to
          contribute to the company in a bigger way. I'm looking forward to
          taking on new challenges and learning as much as I can in my new role.
          I also had a great time on my vacation to Hawaii. The beaches were
          beautiful and I loved trying all of the different types of Hawaiian
          food. It was nice to relax and get away from the daily grind for a
          bit. I'm so grateful to have had the opportunity to take a trip like
          that. On the downside, I feel like I didn't make as much progress on
          my fitness goals as I would have liked. I was really busy with work
          and didn't make it to the gym as often as I planned. I'm going to try
          to be more consistent in July and make exercise a higher priority. I
          know it will be good for my physical and mental health. I also had a
          few rough patches in my relationships this month. I had a couple of
          misunderstandings with friends and it was hard to navigate those
          conflicts. But I'm glad we were able to talk things through and move
          past them. I value my relationships and I want to make sure I'm always
          working to be a good friend. Overall, it was a good month with a mix
          of ups and downs. I'm looking forward to what July has in store! I'm
          hoping to make some more progress on my goals and spend quality time
          with the people I care about.
        </p>
      </div>
    </div>
  );
}
