import '../assets/layout.css'

export default function Error() {
    return (
      // <div className="section--404">
      // </div>
      <form action="/campgrounds" method="POST" novalidate class="validated-form" enctype="multipart/form-data">
                <div class="mb-3">
                    <label class="form-label" for="title">Title</label>
                    <input class="form-control" type="text" id="title" name="campground[title]" required />
                    <div class="invalid-feedback">Give us a name at least</div>
                </div>
                <div class="mb-3">
                    <label class="form-label" for="location">Location</label>
                    <input class="form-control" type="text" id="location" name="campground[location]" required />
                </div>
                <input type="file" name="image" id="image" multiple />
                <div class="mb-3">
                    <label class="form-label" for="description">Description</label>
                    <textarea class="form-control" id="description" name="campground[description]" required></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label" for="price">Price</label>
                    <div class="input-group">
                        <span class="input-group-text" id="price">$</span>
                        <input type="text" class="form-control" name="campground[price]" placeholder="0.00"
                            aria-label="0" aria-describedby="real price in dolars" required />
                    </div>
                </div>
                <div class="mb-3">
                    <button class="btn btn-success">Add Campground</button>
                </div>
            </form>
    );

  }