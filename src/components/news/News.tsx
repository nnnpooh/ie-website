import { NextPage } from "next";
import { FBFeedType } from "@src/api";
import { IconPhoto, IconBrandMeta } from "@tabler/icons";
import { Tabs } from "@mantine/core";
import NewsAnnounce from "@components/news/NewsAccounce";
import NewsFB from "@components/news/NewFB";

interface Props {
  data: FBFeedType[];
}

const NewsTab: NextPage<Props> = ({ data: dataFB }) => {
  return (
    <div className="bg-gray-100">
      <Tabs defaultValue="facebook">
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
          <NewsAnnounce />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default NewsTab;
