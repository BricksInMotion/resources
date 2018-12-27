<?php
$pageTitle = 'Linux Software';
$pageStyles = ['style-index.css'];
require_once '../partials/head.php';
require_once '../partials/header.php';
?>

<main>
  <?php require '../partials/navi.html'; ?>

  <section>
    <h2>Linux software</h2>
    <p>Find Linux software for every stage of brickfilming!</p>
  </section>

  <div class="half">
    <section>
      <h3>Pre-production</h3>

      <ul>
        <li>
          <a href="https://wiki.gnome.org/Apps/Gedit">gedit</a>
          <p>Advanced GTK based text editor for the GNOME desktop enviroment.</p>
        </li>
        <li>
          <a href="https://kate-editor.org/">Kate</a>
          <p>Advanced Qt based text editor for the KDE desktop enviroment.</p>
        </li>
        <li>
          <a href="https://www.libreoffice.org/">LibreOffice</a>
          <p>A free, open-source software suite comparable to Microsoft Office.</p>
        </li>
      </ul>
    </section>

    <section>
      <h3>Production</h3>

      <ul>
        <li>
          <a href="https://wiki.gnome.org/Apps/Cheese">Cheese</a>
          <p>Webcam application for GNOME Desktop enviroments.</p>
        </li>
        <li>
          <a href="http://cinelerra.org/">Cinelerra</a>
          <p>A video editor and compositor for Linux.</p>
        </li>
        <li>
          <a href="https://launchpad.net/luciole">Luciole</a>
          <p>Stopmotion animation application.</p>
        </li>
        <li>
          <a href="http://www.mondobeyondo.com/projects/stopmojo/">StopMojo</a>
          <p>A free animation suite.</p>
        </li>
        <li>
          <a href="http://developer.skolelinux.no/info/studentgrupper/2005-hig-stopmotion/">Stopmotion</a>
          <p>Stopmotion animation application.</p>
        </li>
        <li>
          <a href="https://www.charlielee.uk/boats-animator/">Boats Animator</a>
          <p>A stop motion animation program created using NW.js and WebRTC.</p>
        </li>
      </ul>
    </section>
  </div>

  <div class="half">
    <section>
      <h3>Post-production: Video</h3>

      <ul>
        <li>
          <a href="http://fixounet.free.fr/avidemux/">Avidemux</a>
          <p>Avidemux is a free video editor designed for simple cutting, filtering and encoding tasks.</p>
        </li>
        <li>
          <a href="#">Cinefx</a>
          <p>Cinefx is an offline playback, editing, encoding, animation and visual effects tool based on the Jahshaka technology that allows you to create professional digital media on your desktop. Use the tools that hollywood uses to create blockbuster films and special effects.</p>
        </li>
        <li>
          <a href="https://www.gimp.org/">GIMP</a>
          <p>GIMP is the GNU Image Manipulation Program. It is a freely distributed piece of software for such tasks as photo retouching, image composition and image authoring. It works on many operating systems, in many languages.</p>
        </li>
        <li>
          <a href="https://kdenlive.org/">Kdenlive</a>
          <p>A free and open-source video editor for GNU/Linux and FreeBSD.</p>
        <li>
          <a href="http://www.kinodv.org/article/static/2">Kino</a>
          <p>Kino is a non-linear DV editor for GNU/Linux.</p>
        </li>
        <li>
          <a href="hhttp://lives-video.com/">LiVES</a>
          <p>LiVES is a Free, Open Source video editor *and* a VJ tool.</p>
        </li>
        <li>
          <a href="http://www.pitivi.org/">Pitivi</a>
          <p>GTK based non-linear video editor.</p>
        </li>
      </ul>
    </section>

    <section>
      <h3>Post-Production: Audio</h3>

      <ul>
        <li>
          <a href="https://www.audacityteam.org/">Audacity</a>
          <p>Free audio editor and recorder.</p>
        </li>
      </ul>
    </section>
  </div>
</main>

<?php require '../partials/footer.php'; ?>
</body>
</html>
