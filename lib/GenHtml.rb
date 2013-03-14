require "liquid"

class GenHtml
  


  # Generate file
  def self.do_layout(layout_file,output_file,content,type='index')

    File.open(layout_file, "r",encoding: 'UTF-8') do |layout_file|
      layout = layout_file.read
      result = Liquid::Template.parse(layout).render "content" => content,"type" => type
      File.open(output_file,  "w",encoding: 'UTF-8') do |output_file|
        output_file.write result
      end
    end
  end

end



