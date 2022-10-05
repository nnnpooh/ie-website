import { Carousel } from "@mantine/carousel";
import { Center, Title } from "@mantine/core";
import Image from "next/image";

function CarouselStripe() {
  return (
    <div>
      <Carousel mx="auto" withIndicators height={400}>
        <Carousel.Slide>
          <Center
            sx={(theme) => ({
              backgroundImage: theme.fn.gradient({
                from: "red",
                to: "orange",
                deg: 45,
              }),
              color: theme.white,
            })}
            className="h-full"
          >
            <Title>Unleash Yourself</Title>
          </Center>
        </Carousel.Slide>

        <Carousel.Slide>
          <Center
            sx={(theme) => ({
              backgroundImage: theme.fn.gradient({
                from: "green",
                to: "blue",
                deg: 45,
              }),
              color: theme.white,
            })}
            className="h-full"
          >
            <Title>No Limit</Title>
          </Center>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}

export default CarouselStripe;
