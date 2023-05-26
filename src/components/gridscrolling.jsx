import "./../styles/locomotive.css";


export function GridScrolling({id}) {

  return (
    <div id={id}>
			<section className="tiles tiles--columns-rotated tiles--darker" id="grid">
				<div className="tiles__wrap">
					<div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid">
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-1.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-2.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-3.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-4.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-5.jpg)"}}></div>
					</div>
					<div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid">
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-6.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-7.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-8.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-9.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-10.jpg)"}}></div>
					</div>
					<div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid">
                        <div className="tiles__line-img" style={{backgroundImage: "url(img/R-1.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-2.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-5.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-4.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-3.jpg)"}}></div>
					</div>
					<div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid">
                        <div className="tiles__line-img" style={{backgroundImage: "url(img/R-10.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-8.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-7.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-6.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-5.jpg)"}}></div>
					</div>
					<div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid">
                        <div className="tiles__line-img" style={{backgroundImage: "url(img/R-5.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-4.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-3.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-2.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-1.jpg)"}}></div>
					</div>
                    <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid">
                        <div className="tiles__line-img" style={{backgroundImage: "url(img/R-10.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-9.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-8.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-7.jpg)"}}></div>
						<div className="tiles__line-img" style={{backgroundImage: "url(img/R-6.jpg)"}}></div>
					</div>
				</div>
			</section>
    </div>
  );
}
