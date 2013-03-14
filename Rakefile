require "./lib/GenHtml.rb"

desc "Generate the demo"
task :demo  do
  layout_file = File.dirname(__FILE__)+"/_layout/default.html"
  Dir.glob(File.dirname(__FILE__)+"/_pages/*.html") do |page_file|
    output_file = File.dirname(__FILE__)+"/#{File.basename(page_file)}"
    File.open(page_file,"r",encoding:"UTF-8") do |file|
      GenHtml.do_layout(layout_file,output_file,file.read,File.basename(page_file,'.html'))
    end
  end
end


