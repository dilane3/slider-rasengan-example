import { PageComponent } from "rasengan";
import SimpleCard from "@components/molecules/SimpleCard";
import Slider from "@components/molecules/Slider";
import Container from "@components/molecules/Container";
import logo from "@assets/logo.svg";
import Image from "@rasenganjs/image";
const Home: PageComponent = () => {
  return (
    <>
      <section className="w-screen max-w-[1300px] h-screen bg-white flex flex-col justify-center items-center py-8 px-[20px] md:px-[50px] xl:px-[200px] font-comfortaa mx-auto">
        <div className="w-96 h-44 flex mx-auto">
          <Image
            src={logo}
            alt="rasengan.js"
            width={1200}
            height={100}
          />
        </div>

        <Container
          title="Beautiful slider made with Rasengan.js and TailwindCSS"
          description="Slide to see the magic by clicking left of right arrows"
        >
          <Slider>
            <div className="slider__content flex items-center gap-4 mx-auto">
              <SimpleCard
                data={{
                  src: { uri: "https://picsum.photos/seed/11/400/300" },
                  alt: "photo",
                  title: "Title 1",
                  description: "Description 1",
                }}
              />
              <SimpleCard
                data={{
                  src: { uri: "https://picsum.photos/seed/12/400/300" },
                  alt: "photo",
                  title: "Title 2",
                  description: "Description 2",
                }}
              />
              <SimpleCard
                data={{
                  src: { uri: "https://picsum.photos/seed/22/400/300" },
                  alt: "photo",
                  title: "Title 3",
                  description: "Description 3",
                }}
              />
              <SimpleCard
                data={{
                  src: { uri: "https://picsum.photos/seed/28/400/300" },
                  alt: "photo",
                  title: "Title 4",
                  description: "Description 4",
                }}
              />
              <SimpleCard
                data={{
                  src: { uri: "https://picsum.photos/seed/23/400/300" },
                  alt: "photo",
                  title: "Title 5",
                  description: "Description 5",
                }}
              />

              <SimpleCard
                data={{
                  src: { uri: "https://picsum.photos/seed/24/400/300" },
                  alt: "photo",
                  title: "Title 1",
                  description: "Description 1",
                }}
              />
              <SimpleCard
                data={{
                  src: { uri: "https://picsum.photos/seed/25/400/300" },
                  alt: "photo",
                  title: "Title 1",
                  description: "Description 1",
                }}
              />
              <SimpleCard
                data={{
                  src: { uri: "https://picsum.photos/seed/26/400/300" },
                  alt: "photo",
                  title: "Title 1",
                  description: "Description 1",
                }}
              />
              <SimpleCard
                data={{
                  src: { uri: "https://picsum.photos/seed/27/400/300" },
                  alt: "photo",
                  title: "Title 1",
                  description: "Description 1",
                }}
              />
              <SimpleCard
                data={{
                  src: { uri: "https://picsum.photos/seed/28/400/300" },
                  alt: "photo",
                  title: "Title 1",
                  description: "Description 1",
                }}
              />
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

Home.path = "/";
Home.metadata = {
  title: "Slider",
  description: "Home page",
};

export default Home;
