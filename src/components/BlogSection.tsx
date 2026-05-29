import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const navigate = useNavigate();
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-edu-purple/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-edu-purple mb-4">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Blog Educativo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Artículos, guías y casos de éxito para transformar la gestión de tu institución educativa
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-border/60 bg-card hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString("es-ES")}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Category */}
                <div className="mb-3">
                  <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 hover:bg-primary/10 text-xs h-7 px-2"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    Leer más
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-border/60 hover:bg-muted/30">
            Ver todos los artículos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
