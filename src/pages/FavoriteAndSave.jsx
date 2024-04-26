import { NavBar } from "@/components";
import FavoritePosts from "@/components/davorite-saves/FavoritePosts";
import SavedPosts from "@/components/davorite-saves/SavedPosts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FavoriteAndSave = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="containe flex max-w-7xl mx-auto bg-[#ededed] py-12">
          <div className="w-full md:w-5xl lg:w-2/4 mx-auto flex flex-col gap-2 px-0.5 lg:px-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="py-6 flex justify-center min-w-xl">
                <Tabs defaultValue="account" className="max-w-xl w-full">
                  <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="favorate">
                      <span className="text-sm">Favorate</span>
                    </TabsTrigger>
                    <TabsTrigger value="saves">
                      <span className="text-sm">Saves</span>
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="favorate">
                    <FavoritePosts />
                  </TabsContent>
                  <TabsContent value="saves">
                    <SavedPosts />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteAndSave;