import { NextPage } from "next";
import { FBFeedType, FacebookPageType } from "@src/api";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import { IconPhoto, IconBrandMeta } from "@tabler/icons";
import { useRouter } from "next/router";
import { Container, Card, Center, Badge, Tabs } from "@mantine/core";

interface Props {
  data: FBFeedType[];
}

const NewsFB: NextPage<Props> = ({ data }) => {
  return (
    <>
      <ScrollContainer className="p-4" hideScrollbars={false}>
        <div
          className="grid grid-flow-col gap-4"
          style={{ gridAutoColumns: "21%" }}
        >
          {data.map((el) => (
            <Card
              key={el.id}
              className="hover:scale-105 transition-transform ease-in-out cursor-pointer"
              shadow="lg"
              radius="md"
              withBorder
              onClick={() => {
                openInNewTab(el.permalink_url);
              }}
            >
              <Card.Section>
                {el.full_picture ? (
                  <div className="relative h-60 w-full">
                    <Image
                      src={`/api/imageProxy?imageUrl=${el.full_picture}`}
                      layout="fill"
                      objectFit="cover"
                      alt={el.message}
                    />
                  </div>
                ) : (
                  <div className="h-60 bg-gradient-to-tr from-primary-200 to-primary-700 flex items-center justify-center">
                    {el.message_chars ? (
                      <div className="text-white text-6xl">{`${el.message_chars[0]}.`}</div>
                    ) : (
                      <IconBrandMeta className="text-white" size={80} />
                    )}
                  </div>
                )}
              </Card.Section>

              <div className="flex flex-col gap-2 mt-2">
                <div className="flex justify-start">
                  <div className="flex items-center justify-between w-full">
                    <Badge
                      variant="gradient"
                      gradient={{ from: "cmu.7", to: "cmu.3" }}
                    >
                      {getFBPageName(el.facebook_page)}
                    </Badge>

                    <div className="text-sm text-gray-400">
                      {new Date(el.created_time_ms).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="text-sm">{trim(el.message, 60)}</div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollContainer>
    </>
  );
};

export default NewsFB;

function trim(text: string, num: number) {
  if (text.length > num) {
    // I cannot use text.slice() because it will mess up the emoji.  Use this technique from https://stackoverflow.com/a/61210496
    const arrText = Array.from(text);
    return `${arrText.slice(0, num).join("")}...`;
  } else {
    return text;
  }
}

function getFBPageName(page: FacebookPageType) {
  switch (page) {
    case "undergradTH":
      return "Bachlor";
    case "masterIM":
      return "Master IM";
    case "grad":
      return "Graduate";
    case "ie":
      return "IE-CMU";
  }
}

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
