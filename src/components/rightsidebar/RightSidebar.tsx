import React from "react";

const RightSidebar = () => {
  return (
    <div className="space-y-5">
      <div className="text-white mt-5 space-y-4">
        <h2 className="md:text-3xl text-lg font-semibold">Typography</h2>
        <p className=" text-justify">
          Typography is the art and technique of arranging type to make written
          language legible, readable and appealing when displayed.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <div className="bg-white w-full shadow-md p-5 rounded-lg">
            <div className="space-y-5">
              <p>Typography</p>
              <h1 className="md:text-5xl text-2xl">h1. Heading</h1>
              <h2 className="md:text-4xl text-xl">h2. Heading</h2>
              <h3 className="md:text-3xl text-lg">h3. Heading</h3>
              <h4 className="md:text-2xl text-base">h4. Heading</h4>
              <h5 className="md:text-xl text-sm">h5. Heading</h5>
              <h6 className="md:text-lg text-xs">h6. Heading</h6>
            </div>
          </div>
          <div className="bg-white w-full shadow-md p-5 rounded-lg">
            <div className="space-y-3">
              <p>Lead</p>
              <p>
                This is a lead paragraph. It stands out from regular paragraphs.
              </p>
            </div>
          </div>
          <div className="bg-white w-full shadow-md p-5 rounded-lg">
            <div className="space-y-3">
              <p>Lead</p>
              <p>
                This is a lead paragraph. It stands out from regular paragraphs.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white w-full shadow-md p-5 rounded-lg">
          <div className="space-y-5">
            <p>Typography</p>
            <h1 className="md:text-6xl text-3xl">h1. Heading</h1>
            <h2 className="md:text-5xl text-2xl">h2. Heading</h2>
            <h3 className="md:text-4xl text-xl">h3. Heading</h3>
            <h4 className="md:text-3xl text-lg">h4. Heading</h4>
            <h5 className="md:text-2xl text-base">h5. Heading</h5>
            <h6 className="md:text-xl text-sm">h6. Heading</h6>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-5">
          <div className="bg-white w-full shadow-md p-5 rounded-lg">
            <div className="space-y-5">
              <h1>Text transform</h1>
              <h2>lowercased text.</h2>
              <h3>UPPERCASED TEXT.</h3>
              <h4>CapiTaliZed Text.</h4>
            </div>
          </div>
          <div className="bg-white w-full shadow-md p-5 rounded-lg">
            <div className="space-y-3">
              <p>Font size</p>
              <h1 className="text-6xl">.fs-1 text</h1>
              <h2 className="text-5xl">.fs-2 text</h2>
              <h3 className="text-4xl">.fs-3 text</h3>
              <h4 className="text-3xl">.fs-4 text</h4>
              <h5 className="text-2xl">.fs-5 text</h5>
              <h6 className="text-xl">.fs-6 text</h6>
            </div>
          </div>
          <div className="bg-white w-full shadow-md p-5 rounded-lg">
            <div className="space-y-3">
              <p>Lead</p>
              <p>
                This is a lead paragraph. It stands out from regular paragraphs.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="bg-white w-full shadow-md p-5 rounded-lg">
            <div className="space-y-5">
              <p>Ordered List</p>
              <ol>
                <li>1. Lorem ipsum dolor sit amet</li>
                <li>2. Consectetur adipiscing elit</li>
                <li>3. Integer molestie lorem at massa</li>
                <li>4. Facilisis in pretium nisl aliquet</li>
                <li>5. Nulla volutpat aliquam velit</li>
              </ol>
            </div>
          </div>
          <div className="bg-white w-full shadow-md p-5 rounded-lg">
            <div className="space-y-5">
              <p>Ordered List</p>
              <ol>
                <li>1. Lorem ipsum dolor sit amet</li>
                <li>2. Consectetur adipiscing elit</li>
                <li>3. Integer molestie lorem at massa</li>
                <li>4. Facilisis in pretium nisl aliquet</li>
                <li>5. Nulla volutpat aliquam velit</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="bg-white w-full shadow-md p-5 rounded-lg">
            <div className="space-y-5">
              <p>Typography</p>
              <p>
                Text selection This paragraph will be entirely selected when
                clicked by the user. This paragraph has default select behavior.
              </p>
            </div>
          </div>
          <div className="bg-white w-full shadow-md p-5 rounded-lg">
            <div className="space-y-5">
              <p>Typography</p>
              <p>
                Text selection This paragraph will be entirely selected when
                clicked by the user. This paragraph has default select behavior.
              </p>
            </div>
          </div>
          <div className="bg-white w-full shadow-md p-5 rounded-lg">
            <div className="space-y-5">
              <p>Typography</p>
              <p>
                Text selection This paragraph will be entirely selected when
                clicked by the user. This paragraph has default select behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
