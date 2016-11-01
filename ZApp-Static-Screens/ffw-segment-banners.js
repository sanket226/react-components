/**
 * Change Brand Banners here
 * @type {{id: number, deepLink: string, src: string}[]}
 */
var brandsBanners = [
    {
        id:1,
        deepLink: "",
        src:"img/women_brand_logo_01.jpg"
    },
    {
        id:2,
        deepLink: "",
        src:"img/women_brand_logo_02.jpg"
    },
    {
        id:3,
        deepLink: "",
        src:"img/women_brand_logo_03.jpg"
    },
    {
        id:4,
        deepLink: "",
        src:"img/women_brand_logo_04.jpg"
    },
    {
        id:5,
        deepLink: "",
        src:"img/women_brand_logo_05.jpg"
    },
    {
        id:6,
        deepLink: "",
        src:"img/women_brand_logo_06.jpg"
    }
];

/**
 * Change Category Banners Here
 * @type {{id: number, deepLink: string, src: string}[]}
 */
var categoryBanners = [
    {
        id:1,
        deepLink: "",
        src:"img/women_Cat01.jpg"
    },
    {
        id:2,
        deepLink: "",
        src:"img/women_Cat02.jpg"
    },
    {
        id:3,
        deepLink: "",
        src:"img/women_Cat02.jpg"
    },
    {
        id:4,
        deepLink: "",
        src:"img/women_Cat04.jpg"
    }
];

/**
 * Change Hero Banner Here
 * @type {{deepLink: string, src: string}}
 */
var heroBanner = {
    deepLink:"",
    src: "img/hero.jpg"
};

/**
 * Reusable Components
 */

// Reusable Half Banner Component
var HalfBanner = React.createClass({
    render: function(){
        return(
            <div className="half thick align-center">
                <a href={this.props.deepLink}>
                    <img src={this.props.bannerUrl} width="94%" />
                </a>
            </div>
        );
    }
});

// Reusable Title Component
var TitleBanner = React.createClass({
    render: function(){
        return(
            <div className="full breathing-room">
                <img className="cms-align-title-img" src={this.props.bannerUrl} width="98%" />
            </div>
        );
    }
});

// Reusable Full Banner Component
var FullBanner = React.createClass({
    render: function(){
        return(
            <div className="full thick">
                <a href={this.props.deepLink}>
                    <img className="cms-align-title-img" src={this.props.bannerUrl} width="98%" />
                </a>
            </div>
        );
    }
});

/**
 * Page Specific Components
 */

// Women Deals Component
var SaleDeals = React.createClass({

    // Ask OMs to edit Sale Deals Banner & deeplinks below
    getDefaultProps: function(){
        return {
            womenDeals1DeepLink: "",
            womenDeals1Banner: "img/women_Deal01.jpg",
            womenDeals2DeepLink: "",
            womenDeals2Banner: "img/women_Deal02.jpg"
        }
    },

    render: function(){
        return (
            <div class="full">
                <HalfBanner deepLink={this.props.womenDeals1DeepLink} bannerUrl={this.props.womenDeals1Banner} />
                <HalfBanner deepLink={this.props.womenDeals2DeepLink} bannerUrl={this.props.womenDeals2Banner} />
            </div>
        );
    }
});

// Women Categories Component
var ShopByCategories = React.createClass({
    render: function(){
        return (
            <div>
                <TitleBanner bannerUrl="img/header_shopbycat.jpg" />
                {
                    categoryBanners.map(function (c) {
                        return (
                            <HalfBanner deepLink={c.deepLink} bannerUrl={c.src} />
                        );
                    })
                }
                <FullBanner bannerUrl="img/cta_shopallcats.jpg" />
            </div>
        );
    }
});

// Women Brands Component
var ShopByBrands = React.createClass({
    render: function(){
        return (
            <div>
                <TitleBanner bannerUrl="img/header_shopbybrand.jpg" />
                {
                    brandsBanners.map(function (b) {
                        return (
                            <HalfBanner deepLink={b.deepLink} bannerUrl={b.src} />
                        );
                    })
                }
                <FullBanner bannerUrl="img/cta_shopallwomen.jpg" />
            </div>
        );
    }
});

// Main Component
var Main = React.createClass({
    render: function(){
        return (
            <div>
                <FullBanner deepLink={heroBanner.deepLink} bannerUrl={heroBanner.src} />
                <SaleDeals />
                <ShopByCategories />
                <ShopByBrands />
            </div>
        );
    }
});

/**
 * Only render The Main Component on the canvas
 */
React.render(<Main />, document.body);