using System;
using System.IO;
using System.Windows.Forms;

namespace FruitCombinerV1
{
    public partial class Form1 : Form
    {
        private string[] fruits;
        public string final = "";

        private void Form1_Load(object sender, EventArgs e)
        {
            string lib = File.ReadAllText(@"library.lib");
            fruits = lib.Split("\n");
            foreach (string fruit in fruits)
            {
                if (fruit.Length>0)
                {
                    checkedListBox1.Items.Add(fruit.Split(",")[0]);
                }

            }
            
        }
        public Form1()
        {
            InitializeComponent();
        }

        private void Button1_Click(object sender, EventArgs e)
        {
            final = "";
            foreach (object item in checkedListBox1.CheckedItems)
            {
                foreach (string fruit in fruits)
                {
                    if (fruit.Contains(item.ToString()))
                    {

                        final += (fruit.Split(",")[1].Remove(fruit.Split(",")[1].Length-1));
                    }
                }
            }
            MessageBox.Show("New Fruit: "+final);
        }
    }
}
