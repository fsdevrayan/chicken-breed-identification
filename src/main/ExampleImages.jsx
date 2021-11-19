import React from 'react'

/**
 * Import Images for examples
 */
import bpr from "./examples/Barred Plymouth Rock.jpg"
import bat from "./examples/Black Australorp.jpg"
import bsr from "./examples/Blackstar.jpg"
import bma from "./examples/Brahma.jpg"
import dbn from "./examples/Decalb Brown.jpg"
import hso from "./examples/Hubbard Sasso.jpg"
import jgt from "./examples/Jersey Giant.jpg"
import kbr from "./examples/Kabir.jpg"
import pbk from "./examples/Peruvian Black.jpg"
import rir from "./examples/Rhode Island Red.jpg"
import riw from "./examples/Rhode Island White.jpg"
import sho from "./examples/Shamo.jpg"

function ExampleImages() {
	return (

		<div>
			<div className="modal fade" id="bprModal" tab-index="-1" data-bs-backdrop="false" data-bs-keyboard="false">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Barred Plymouth Rock</h5>
						</div>
						<div className="modal-body">
							<img className="pb-4" src={bpr} alt={bpr} height="100%" width="100%" />
							<p><strong>Characteristics</strong>: Plymouth Rock are a good general farm chicken. They are docile, while showing some broodiness. They possess a long, broad back and a moderately deep, full breast. They have a single comb of moderate size.</p>
							<p><strong>Personality & Temperament</strong>: Plymouth Rocks are not extremely aggressive, and tame quite easily.</p>
							<p><strong>Standard Weights</strong>:   Cock: 9 ½  lbs; Hen: 7 ½   lbs; Cockerel: 8  lbs; Pullet: 6  lbs.</p>
							<p><strong>Varieties</strong>: White, Buff, Partridge, Silver Penciled, Blue, Columbian.</p>
							<p><strong>Egg Shell Color</strong>: Brown</p>
							<p><strong>Uses</strong>: Dual-purpose breed, and is kept both for its meat and for its large brown eggs, of which it lays about 200 per year. Plymouth Rock Chickens are commonly used for mass egg and meat.</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#helpModal">Back</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="batModal" tab-index="-1" data-bs-backdrop="false" data-bs-keyboard="false">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Black Australorp</h5>
						</div>
						<div className="modal-body">
							<img className="pb-4" src={bat} alt={bat} height="100%" width="100%" />
							<p><strong>Characteristics</strong>: Black Australorps are large, heavy, soft-feathered fowl with an upright stance and close-fitting feathers. They have deep bodies and well-rounded breasts, and they are broad across the shoulders and saddles. Both genders hold their compact tails high.</p>
							<p><strong>Personality & Temperament</strong>: Australorps make good family birds as they are calm and friendly and happy to be handled.</p>
							<p><strong>Standard Weights</strong>: Rooster: 8 lbs to 10 lbs, Hen: 7 lbs to 9 lbs, Cockerel: 7 lbs to 8 lbs, Pullet: 6 lbs to 7 lbs.</p>
							<p><strong>Varieties</strong>: Glossy black chicken with a beetle-green sheen.Followed by the Blue Australorp which has blue-ish gray feathers with slight lacing.Lastly, there is the White Australorp which is much less widespread.</p>
							<p><strong>Egg Shell Color</strong>: Brown</p>
							<p><strong>Uses</strong>: Australorps are dual-purpose birds.They are well-fleshed with white skin and a good taste.</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#helpModal">Back</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="bsrModal" tab-index="-1" data-bs-backdrop="false" data-bs-keyboard="false">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Blackstar</h5>
						</div>
						<div className="modal-body">
							<img className="pb-4" src={bsr} alt={bsr} height="100%" width="100%" />
							<p><strong>Characteristics</strong>: are an excellent brown egg-laying breed. Black Star hen will have pure black feathers while the male is black and has a white spot on the top of the head.</p>
							<p><strong>Personality & Temperament</strong>: The Black Star is a very nice bird for urban or suburban yards they are quiet, productive and friendly.</p>
							<p><strong>Standard Weights</strong>: Roosters weighing around 7-8lbs each and hens around 5lbs</p>
							<p><strong>Varieties</strong>: Black Star chickens are a cross between a Rhode Island or New Hampshire rooster and Barred Rock hen and are similar to Red Star, Red Sex-Link, Golden Comet and Golden Bluff breeds.</p>
							<p><strong>Egg Shell Color</strong>: Brown</p>
							<p><strong>Uses</strong>: Dual purpose hen, not too many folks actually use the meat from the bird and easy to raise.</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#helpModal">Back</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="bmaModal" tab-index="-1" data-bs-backdrop="false" data-bs-keyboard="false">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Brahma</h5>
						</div>
						<div className="modal-body">
							<img className="pb-4" src={bma} alt={bma} height="100%" width="100%" />
							<p><strong>Characteristics</strong>:  Brahmas are large chickens with feathers on shanks and toes, pea comb, smooth fitting plumage with dense down in all sections, and broad, wide head with skull projecting over the eyes – termed “beetle brow.”</p>
							<p><strong>Personality and temperament</strong>:  It is a friendly, docile, and calm bird, and very easy to handle.</p>
							<p><strong>Standard weights (Light)</strong>: Cock-12 pounds; hen-9-1/2 pounds; cockerel-10 pounds; pullet-8 pounds.</p>
							<p><strong>Standard Weights (Dark and Buff)</strong>: Cock-1 1 pounds; hen-8-1/2 pounds; cockerel-9 pounds; pullet-7 pounds.</p>
							<p><strong>Varieties</strong>: Light, Dark, Buff.</p>
							<p><strong>Egg shell color</strong>: Brown </p>
							<p><strong>Uses</strong>: A very heavy fowl for the production of heavy roasters or capons.Fair egg layers.</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#helpModal">Back</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="bmaModal" tab-index="-1" data-bs-backdrop="false" data-bs-keyboard="false">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Brahma</h5>
						</div>
						<div className="modal-body">
							<img className="pb-4" src={bma} alt={bma} height="100%" width="100%" />
							<p><strong>Characteristics</strong>:  Brahmas are large chickens with feathers on shanks and toes, pea comb, smooth fitting plumage with dense down in all sections, and broad, wide head with skull projecting over the eyes – termed “beetle brow.”</p>
							<p><strong>Personality and temperament</strong>:  It is a friendly, docile, and calm bird, and very easy to handle.</p>
							<p><strong>Standard weights (Light)</strong>: Cock-12 pounds; hen-9-1/2 pounds; cockerel-10 pounds; pullet-8 pounds.</p>
							<p><strong>Standard Weights (Dark and Buff)</strong>: Cock-1 1 pounds; hen-8-1/2 pounds; cockerel-9 pounds; pullet-7 pounds.</p>
							<p><strong>Varieties</strong>: Light, Dark, Buff.</p>
							<p><strong>Egg shell color</strong>: Brown </p>
							<p><strong>Uses</strong>: A very heavy fowl for the production of heavy roasters or capons.Fair egg layers.</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#helpModal">Back</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="dbnModal" tab-index="-1" data-bs-backdrop="false" data-bs-keyboard="false">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Decalb Brown</h5>
						</div>
						<div className="modal-body">
							<img className="pb-4" src={dbn} alt={dbn} height="100%" width="100%" />
							<p><strong>Characteristics</strong>:  Dekalb Brown is a well-balanced, all round performance laying hen.</p>
							<p><strong>Personality and temperament</strong>:  Efficient, docile, and capable of laying up to 500 eggs in its lifetime.</p>
							<p><strong>Standard weights</strong>: 5kg</p>
							<p><strong>Varieties</strong>: brown</p>
							<p><strong>Egg shell color</strong>: Dark Brown</p>
							<p><strong>Uses</strong>: The Dekalb Brown is an ideal brown egg layer for high numbers of first quality, medium-sized, table eggs. The Dekalb Brown chickens deliver predictable and proven profits for egg producers. With high peak production and excellent egg laying persistency the Dekalb Brown is a proven all-round performer.</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#helpModal">Back</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="hsoModal" tab-index="-1" data-bs-backdrop="false" data-bs-keyboard="false">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Hubbard Sasso</h5>
						</div>
						<div className="modal-body">
							<img className="pb-4" src={hso} alt={hso} height="100%" width="100%" />
							<p><strong>Characteristics</strong>: The main qualities of the Hubbard Sasso chicken are strong initial growth coupled with very good FCR. Its robustness and adaptability are evident under any temperature and feed conditions.</p>
							<p><strong>Personality & Temperament</strong>: Easy-going, self-sufficient, independent.</p>
							<p><strong>Standard Weights</strong>:   2.5 kg (5.5 lbs) to over 3.5 kg (8 lbs) live weight.</p>
							<p><strong>Varieties</strong>: All colors, Hubbard chickens can be a variety of different species, some of their features can vary, such as the length and thickness</p>
							<p><strong>Egg Shell Color</strong>: Brown</p>
							<p><strong>Uses</strong>: Dual-purpose breed, and is kept both for its meat and for its large brown eggs.</p>
							<div className="modal-footer">
								<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#helpModal">Back</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="jgtModal" tab-index="-1" data-bs-backdrop="false" data-bs-keyboard="false">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Jersey Giant</h5>
						</div>
						<div className="modal-body">
							<img className="pb-4" src={jgt} alt={jgt} height="100%" width="100%" />
							<p><strong>Characteristics</strong>: They should be rugged, with an angular shape, single comb and black (with willowish tinge) shanks in the Black variety and dark willow shanks in the White variety.</p>
							<p><strong>Personality & Temperament</strong>: Docile, calm, friendly and enjoy human company.</p>
							<p><strong>Standard Weights</strong>: Cock-13 pounds; hen-10 pounds; cockerel-11 pounds; pullet-8 pounds.</p>
							<p><strong>Varieties</strong>: Black, White.</p>
							<p><strong>Egg Shell Color</strong>: Brown </p>
							<p><strong>Uses</strong>: The Jersey Giant is a dual-purpose fowl for meat and eggs.This fowl lays around 150 - 200 eggs per year depending on conditions such as the weather and level of comfort for the chickens.</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#helpModal">Back</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="kbrModal" tab-index="-1" data-bs-backdrop="false" data-bs-keyboard="false">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Kabir</h5>
						</div>
						<div className="modal-body">
							<img className="pb-4" src={kbr} alt={kbr} height="100%" width="100%" />
							<p><strong>Characteristics</strong>: Kabir breeds are strong and healthy that they can be bred and reared without antibiotics, resulting in higher profits and lower costs. </p>
							<p><strong>Personality and temperament</strong>:  Strong and Healthy. </p>
							<p><strong>Standard weights</strong>: 5kg </p>
							<p><strong>Varieties</strong>: white, black, grey, reddish-orange</p>
							<p><strong>Egg shell color</strong>: reddish-orange</p>
							<p><strong>Uses</strong>: It is mostly raised for meat production because of its rapid growth, good size and efficient feed conversion. The chicken is resistant to disease and can tolerate heat stress.</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#helpModal">Back</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="pbkModal" tab-index="-1" data-bs-backdrop="false" data-bs-keyboard="false">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Peruvian Black Knight</h5>
						</div>
						<div className="modal-body">
							<img className="pb-4" src={pbk} alt={pbk} height="100%" width="100%" />
							<p><strong>Characteristics</strong>: Peruvian Black knight knows as exhibition fowl. Peruvian mostly pea comb and straight comb.</p>
							<p><strong>Personality & Temperament</strong>: Good to raise, aggressive and fault being endurance.</p>
							<p><strong>Standard Weights</strong>:   6-13 pounds with most common 8-10 size </p>
							<p><strong>Varieties</strong>: Brown Red and Black</p>
							<p><strong>Uses</strong>: Ornamental/Fighting</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#helpModal">Back</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="rirModal" tab-index="-1" data-bs-backdrop="false" data-bs-keyboard="false">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Rhode Island Red</h5>
						</div>
						<div className="modal-body">
							<img className="pb-4" src={rir} alt={rir} height="100%" width="100%" />
							<p><strong>Characteristics</strong>:  Rhode Island Reds are a good choice for the small flock owner. Relatively hardy, they are probably the best egg layers of the dual purpose breeds. Reds handle marginal diets and poor housing conditions better than other breeds and still continue to produce eggs.</p>
							<p><strong>Personality and temperament</strong>: Rhode Island Red is far from pushy and extremely calm, and docile.</p>
							<ul>
								<li>
									Standard weights:
									<ul>
										<li>APA</li>
										<li>Cock: 8 ½  lbs; Hen: 6 ½  lbs; Cockerel: 7 ½  lbs; Pullet: 5 ½  lbs.</li>
										<li>PCGB</li>
										<li>Cock: 3.85 kg; Hen: 2.95 kg; Cockerel: 3.60 kg; Pullet: 2.50 kg</li>
									</ul>
								</li>
							</ul>
							<p><strong>Varieties</strong>:  Single Comb, Rose Comb</p>
							<p><strong>Egg shell color</strong>: Brown</p>
							<p><strong>Uses</strong>: The Rhode Island Red is a dual-purpose for meat and eggs, laying around 150 - 200 per year.</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#helpModal">Back</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="riwModal" tab-index="-1" data-bs-backdrop="false" data-bs-keyboard="false">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Rhode Island White</h5>
						</div>
						<div className="modal-body">
							<img className="pb-4" src={riw} alt={riw} height="100%" width="100%" />
							<p><strong>Characteristics</strong>:  Rhode Island Whites have long, broad and deep bodies which are carried horizontally (which is giving them an oblong and brick-like appearance overall). Their heads are fairly deep and are inclined to be flat on top rather than round. Their breasts are deep, full and well rounded.</p>
							<p><strong>Personality and temperament</strong>: Calm, Friendly, Quiet, Aggressive, Easily Handled, Noisy, Docile, Shy.</p>
							<p><strong>Standard weights</strong>: weight about 3.9 kg and hens about 2.9 kg</p>
							<p><strong>Varieties</strong>: pure white plumage, red wattles and earlobes, and a medium size rose comb.</p>
							<p><strong>Egg shell color</strong>: Brown </p>
							<p><strong>Uses</strong>: Rhode Island Whites are a dual-purpose fowl suitable for both meat and egg production.</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#helpModal">Back</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="shoModal" tab-index="-1" data-bs-backdrop="false" data-bs-keyboard="false">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Shamo</h5>
						</div>
						<div className="modal-body">
							<img className="pb-4" src={sho} alt={sho} height="100%" width="100%" />
							<p><strong>Characteristics</strong>: The Shamos are large and tall chicken with upright, nearly vertical, body carriage.</p>
							<p><strong>Personality & Temperament</strong>: The Shamo chicken is an aggressive bird. The hens have a calm while rooster is aggressive to each other.</p>
							<p><strong>Standard Weights</strong>:  Shamo roosters weight 5 kg and hens about 3.18 kg. </p>
							<p><strong>Varieties</strong>: Black, Black Breasted Red, Dark and Red</p>
							<p><strong>Egg Shell Color</strong>: Light Brown</p>
							<p><strong>Uses</strong>: Ornamental/Fighting</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#helpModal">Back</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="helpModal" data-bs-keyboard="false" data-bs-backdrop="false">
				<div className="modal-dialog modal-dialog-centered modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Examples of images can classify</h5>
							<button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div className="row examples">
								<div className='col-md-3 mt-3'>
									<img src={bpr} alt={bpr} height="100%" width="100%" />
									<p className="text-primary" role="button" data-bs-toggle="modal" data-bs-target="#bprModal">Barred Plymouth Rock</p>
								</div>
								<div className='col-md-3 mt-3'>
									<img src={bat} alt={bat} height="100%" width="100%" />
									<p className="text-primary" role="button" data-bs-toggle="modal" data-bs-target="#batModal">Black Australorp</p>
								</div>
								<div className='col-md-3 mt-3'>
									<img src={bsr} alt={bsr} height="100%" width="100%" />
									<p className="text-primary" role="button" data-bs-toggle="modal" data-bs-target="#bsrModal">Blackstar</p>
								</div>
								<div className='col-md-3 mt-3'>
									<img src={bma} alt={bma} height="100%" width="100%" />
									<p className="text-primary" role="button" data-bs-toggle="modal" data-bs-target="#bmaModal">Brahma</p>
								</div>
								<div className='col-md-3 mt-3'>
									<img src={dbn} alt={dbn} height="100%" width="100%" />
									<p className="text-primary" role="button" data-bs-toggle="modal" data-bs-target="#dbnModal">Decalb Brown</p>
								</div>
								<div className='col-md-3 mt-3'>
									<img src={hso} alt={hso} height="100%" width="100%" />
									<p className="text-primary" role="button" data-bs-toggle="modal" data-bs-target="#hsoModal">Hubbard Sasso</p>
								</div>
								<div className='col-md-3 mt-3'>
									<img src={jgt} alt={jgt} height="100%" width="100%" />
									<p className="text-primary" role="button" data-bs-toggle="modal" data-bs-target="#jgtModal">Jersey Giant</p>
								</div>
								<div className='col-md-3 mt-3'>
									<img src={kbr} alt={kbr} height="100%" width="100%" />
									<p className="text-primary" role="button" data-bs-toggle="modal" data-bs-target="#kbrModal">Kabir</p>
								</div>
								<div className='col-md-3 mt-3'>
									<img src={pbk} alt={pbk} height="100%" width="100%" />
									<p className="text-primary" role="button" data-bs-toggle="modal" data-bs-target="#pbkModal">Peruvian Black</p>
								</div>
								<div className='col-md-3 mt-3'>
									<img src={rir} alt={rir} height="100%" width="100%" />
									<p className="text-primary" role="button" data-bs-toggle="modal" data-bs-target="#rirModal">Rhode Island Red</p>
								</div>
								<div className='col-md-3 mt-3'>
									<img src={riw} alt={riw} height="100%" width="100%" />
									<p className="text-primary" role="button" data-bs-toggle="modal" data-bs-target="#riwModal">Rhode Island White</p>
								</div>
								<div className='col-md-3 mt-3'>
									<img src={sho} alt={sho} height="100%" width="100%" />
									<p className="text-primary" role="button" data-bs-toggle="modal" data-bs-target="#shoModal">Shamo</p>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-lg btn-success rounded-0" data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default ExampleImages
