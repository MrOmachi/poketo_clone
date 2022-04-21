const createFooter = () => {
  let footer = document.querySelector('.footer_container');
  footer.innerHTML = `<div class="main_footer">
        <div class="footer_col1">
          <div class="footer_col1_h1"><h3>NEWSLETTER SIGN UP</h3></div>
          <input
            type="email"
            class="footer_email"
            placeholder="Enter your email"
          />
          <a href="">SIGN UP</a> <br />
          <br />
          <input type="checkbox" />Receive news about Poketo Los Angeles?
          <div class="social_icons">
            <h4>SOCIAL LINKS</h4>
            <div class="social_icons_img">
              <img src="./img/220375.png" alt="" />
              <img src="./img/facebook.png" alt="" />
              <img src="./img/pinterest.png" alt="" />
              <img src="./img/instagram.png" alt="" />
            </div>
            <h5>Don't forget to follow us!</h5>
          </div>
        </div>
        <div class="footer_col2">
          <div class="footer_col2_top_text">
            <h4>WHOLESALE</h4>
            <h1 class="h1_links"><a href="">Visit our wholesale site</a></h1>
            <h3>
              Are you a retailer interested in carrying Poketo products? We have
              a site just for you.
            </h3>
          </div>
          <div class="footer_menu"><h4>FOOTER MENU</h4></div>
          <div class="footer_menu_links">
            <ul class="footer_links">
              <li>Accessibility</li>
              <li>Custom Production</li>
              <li>Contact</li>
              <li>Journal</li>
              <li>Workshops FAQ</li>
              <li>Returns</li>
              <li>Terms of Service</li>
            </ul>
            <ul class="footer_links2">
              <li>Wholesale</li>
              <li>Store Location and Hours</li>
              <li>About</li>
              <li>Shipping FAQ</li>
              <li>Help FAQ</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright">
        <h5>Copyright © 2022 Poketo</h5>
      </div>`;
};

createFooter();
