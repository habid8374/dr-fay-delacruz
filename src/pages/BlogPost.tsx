import { useParams, Navigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{line.substring(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-8">{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-6">{line.substring(4)}</h3>;
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="font-semibold text-gray-900 mb-2">{line.substring(2, line.length - 2)}</p>;
      }
      if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
        return <p key={index} className="italic text-gray-700 mb-4 text-center bg-blue-50 p-4 rounded-lg">{line.substring(1, line.length - 1)}</p>;
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="text-gray-700 mb-1">{line.substring(2)}</li>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={`${post.title} | Blog HALU`}
        description={post.excerpt}
        image={post.image}
      />
      
      <Header />
      
      <article className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Button>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('es-ES')}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {formatContent(post.content)}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    ¿Te gustó este artículo?
                  </h3>
                  <p className="text-blue-700 text-sm mb-4">
                    Descubre cómo HALU puede transformar tu institución educativa
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={() => window.open('https://wa.me/573246868538?text=Hola, leí el artículo sobre HALU y me interesa conocer más', '_blank')}
                      className="bg-green-500 hover:bg-green-600"
                    >
                      Contactar por WhatsApp
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.location.href = '/#demo-section'}
                    >
                      Solicitar Demo Gratuita
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;