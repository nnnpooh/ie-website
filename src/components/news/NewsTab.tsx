import { NextPage } from "next";
import { FBFeedType, AnnouncementDataType } from "@src/api";
import { IconPhoto, IconBrandMeta } from "@tabler/icons";
import { Tabs, Slider } from "@mantine/core";
import NewsAnnouncement from "@components/news/NewsAccouncement";
import NewsFB from "@components/news/NewFB";

interface Props {
  dataFB: FBFeedType[];
  dataAnnouncement: AnnouncementDataType[];
}

const NewsTab: NextPage<Props> = ({ dataFB, dataAnnouncement }) => {
  return (
    <div className="bg-white">
      <Tabs defaultValue="facebook" classNames={{ tab: "py-4 text-gray-400" }}>
        <Tabs.List grow>
          <Tabs.Tab value="facebook" icon={<IconPhoto size={14} />}>
            Gallery
          </Tabs.Tab>
          <Tabs.Tab value="messages" icon={<IconPhoto size={14} />}>
            Messages
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="facebook" pt="xs">
          <NewsFB data={dataFB} />
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xl">
          <NewsAnnouncement data={dataAnnouncement} />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default NewsTab;
