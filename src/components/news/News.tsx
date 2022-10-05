import { NextPage } from "next";
import { FBFeedType } from "@src/api";
import Image from "next/image";
import { Container, Card } from "@mantine/core";

interface Props {
  ug: FBFeedType;
  im: FBFeedType;
  grad: FBFeedType;
}

const NewsPage: NextPage<Props> = ({ ug, im, grad }) => {
  console.log({ ug, im, grad });
  return (
    <div className="bg-gray-200">
      <Container size={"xl"}>
        <div className="flex gap-2">
          {ug.data.map((fb) => (
            <Card key={fb.id}>
              <Card.Section>
                {fb?.full_picture && (
                  <div className="relative h-80 w-80">
                    <Image
                      src={fb.full_picture}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
              </Card.Section>
              <div>
                {fb?.attachments?.data
                  ? fb.attachments.data[0].description
                  : ""}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewsPage;
